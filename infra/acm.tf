# ─── ACM Certificate (prod only — must be us-east-1 for CloudFront) ──────────

locals {
  # Redirect domains that share the main ACM cert (excludes overflow domains)
  main_redirect_domains = [for d in var.redirect_domains : d if !contains(var.separate_cert_domains, d)]

  # All domains on the main cert: primary + www.primary + each main redirect + www.redirect
  all_domains = local.is_prod ? concat(
    [var.primary_domain, "www.${var.primary_domain}"],
    flatten([for d in local.main_redirect_domains : [d, "www.${d}"]])
  ) : []

  # SANs = everything except the primary domain
  sans = [for d in local.all_domains : d if d != var.primary_domain]

  # Map each domain to its hosted zone (includes all redirect domains for validation)
  domain_to_zone = local.is_prod ? merge(
    { (var.primary_domain) = aws_route53_zone.primary.zone_id },
    { for d in var.redirect_domains : d => aws_route53_zone.redirects[d].zone_id }
  ) : {}
}

resource "aws_acm_certificate" "site" {
  count = local.is_prod ? 1 : 0

  domain_name               = var.primary_domain
  subject_alternative_names = local.sans
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

# ─── DNS validation records ──────────────────────────────────────────────────

resource "aws_route53_record" "acm_validation" {
  for_each = local.is_prod ? {
    for dvo in aws_acm_certificate.site[0].domain_validation_options : dvo.domain_name => {
      name    = dvo.resource_record_name
      type    = dvo.resource_record_type
      value   = dvo.resource_record_value
      zone_id = lookup(
        local.domain_to_zone,
        replace(dvo.domain_name, "www.", ""),
        ""
      )
    }
  } : {}

  zone_id         = each.value.zone_id
  name            = each.value.name
  type            = each.value.type
  records         = [each.value.value]
  ttl             = 300
  allow_overwrite = true
}

resource "aws_acm_certificate_validation" "site" {
  count = local.is_prod ? 1 : 0

  certificate_arn         = aws_acm_certificate.site[0].arn
  validation_record_fqdns = [for r in aws_route53_record.acm_validation : r.fqdn]
}
