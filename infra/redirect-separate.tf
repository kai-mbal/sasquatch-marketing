# ─── Separate redirect infrastructure for domains that exceed the ACM 10-domain limit ─
# These domains get their own ACM cert + CloudFront distribution but still redirect
# to the primary domain via the shared redirect CloudFront Function.

# ─── ACM Certificate for overflow redirect domains ────────────────────────────

locals {
  separate_cert_all_domains = local.is_prod ? flatten(
    [for d in var.separate_cert_domains : [d, "www.${d}"]]
  ) : []

  separate_cert_sans = length(local.separate_cert_all_domains) > 1 ? slice(local.separate_cert_all_domains, 1, length(local.separate_cert_all_domains)) : []

  separate_domain_to_zone = local.is_prod ? {
    for d in var.separate_cert_domains : d => aws_route53_zone.redirects[d].zone_id
  } : {}
}

resource "aws_acm_certificate" "redirect_separate" {
  count = local.is_prod && length(var.separate_cert_domains) > 0 ? 1 : 0

  domain_name               = local.separate_cert_all_domains[0]
  subject_alternative_names = local.separate_cert_sans
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "separate_acm_validation" {
  for_each = local.is_prod && length(var.separate_cert_domains) > 0 ? {
    for dvo in aws_acm_certificate.redirect_separate[0].domain_validation_options : dvo.domain_name => {
      name    = dvo.resource_record_name
      type    = dvo.resource_record_type
      value   = dvo.resource_record_value
      zone_id = lookup(
        local.separate_domain_to_zone,
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

resource "aws_acm_certificate_validation" "redirect_separate" {
  count = local.is_prod && length(var.separate_cert_domains) > 0 ? 1 : 0

  certificate_arn         = aws_acm_certificate.redirect_separate[0].arn
  validation_record_fqdns = [for r in aws_route53_record.separate_acm_validation : r.fqdn]
}

# ─── Lightweight CloudFront distribution for redirect-only domains ────────────

resource "aws_cloudfront_distribution" "redirect_separate" {
  count = local.is_prod && length(var.separate_cert_domains) > 0 ? 1 : 0

  enabled         = true
  is_ipv6_enabled = true
  http_version    = "http2and3"
  price_class     = "PriceClass_100"
  comment         = "Sasquatch redirect — separate cert domains"

  aliases = local.separate_cert_all_domains

  # Use the same S3 origin (redirect function intercepts before it's reached)
  origin {
    domain_name              = aws_s3_bucket.site.bucket_regional_domain_name
    origin_id                = "s3-site"
    origin_access_control_id = aws_cloudfront_origin_access_control.site.id
  }

  default_cache_behavior {
    target_origin_id       = "s3-site"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true

    cache_policy_id = "658327ea-f89d-4fab-a63d-7e88639e58f6" # CachingOptimized

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.redirect[0].arn
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate_validation.redirect_separate[0].certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}

# ─── Route 53 records for separate-cert redirect domains ──────────────────────

resource "aws_route53_record" "separate_redirect_a" {
  for_each = local.is_prod ? toset(var.separate_cert_domains) : toset([])

  zone_id = aws_route53_zone.redirects[each.value].zone_id
  name    = each.value
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.redirect_separate[0].domain_name
    zone_id                = aws_cloudfront_distribution.redirect_separate[0].hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "separate_redirect_aaaa" {
  for_each = local.is_prod ? toset(var.separate_cert_domains) : toset([])

  zone_id = aws_route53_zone.redirects[each.value].zone_id
  name    = each.value
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.redirect_separate[0].domain_name
    zone_id                = aws_cloudfront_distribution.redirect_separate[0].hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "separate_redirect_www_a" {
  for_each = local.is_prod ? toset(var.separate_cert_domains) : toset([])

  zone_id = aws_route53_zone.redirects[each.value].zone_id
  name    = "www.${each.value}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.redirect_separate[0].domain_name
    zone_id                = aws_cloudfront_distribution.redirect_separate[0].hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "separate_redirect_www_aaaa" {
  for_each = local.is_prod ? toset(var.separate_cert_domains) : toset([])

  zone_id = aws_route53_zone.redirects[each.value].zone_id
  name    = "www.${each.value}"
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.redirect_separate[0].domain_name
    zone_id                = aws_cloudfront_distribution.redirect_separate[0].hosted_zone_id
    evaluate_target_health = false
  }
}
