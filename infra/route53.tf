# ─── Hosted zones (managed as resources for cross-account portability) ────────

resource "aws_route53_zone" "primary" {
  name = var.primary_domain
}

resource "aws_route53_zone" "redirects" {
  for_each = toset(var.redirect_domains)
  name     = each.value
}

# ─── Primary domain DNS records (prod only) ──────────────────────────────────

# sasquatchpermit.com → CloudFront
resource "aws_route53_record" "primary_a" {
  count   = local.is_prod ? 1 : 0
  zone_id = aws_route53_zone.primary.zone_id
  name    = var.primary_domain
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "primary_aaaa" {
  count   = local.is_prod ? 1 : 0
  zone_id = aws_route53_zone.primary.zone_id
  name    = var.primary_domain
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

# www.sasquatchpermit.com → CloudFront
resource "aws_route53_record" "primary_www_a" {
  count   = local.is_prod ? 1 : 0
  zone_id = aws_route53_zone.primary.zone_id
  name    = "www.${var.primary_domain}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "primary_www_aaaa" {
  count   = local.is_prod ? 1 : 0
  zone_id = aws_route53_zone.primary.zone_id
  name    = "www.${var.primary_domain}"
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

# ─── Redirect domain DNS records (prod only) ─────────────────────────────────

resource "aws_route53_record" "redirect_a" {
  for_each = local.is_prod ? toset(local.main_redirect_domains) : toset([])

  zone_id = aws_route53_zone.redirects[each.value].zone_id
  name    = each.value
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "redirect_aaaa" {
  for_each = local.is_prod ? toset(local.main_redirect_domains) : toset([])

  zone_id = aws_route53_zone.redirects[each.value].zone_id
  name    = each.value
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "redirect_www_a" {
  for_each = local.is_prod ? toset(local.main_redirect_domains) : toset([])

  zone_id = aws_route53_zone.redirects[each.value].zone_id
  name    = "www.${each.value}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "redirect_www_aaaa" {
  for_each = local.is_prod ? toset(local.main_redirect_domains) : toset([])

  zone_id = aws_route53_zone.redirects[each.value].zone_id
  name    = "www.${each.value}"
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}
