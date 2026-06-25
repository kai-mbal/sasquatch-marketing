# ─── CloudFront Origin Access Control ─────────────────────────────────────────

resource "aws_cloudfront_origin_access_control" "site" {
  name                              = "sasquatch-${local.environment}-oac"
  description                       = "OAC for sasquatch ${local.environment} S3 bucket"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# ─── CloudFront Function: redirect non-primary domains (prod only) ────────────

resource "aws_cloudfront_function" "redirect" {
  count = local.is_prod ? 1 : 0

  name    = "sasquatch-domain-redirect"
  runtime = "cloudfront-js-2.0"
  publish = true
  code    = <<-EOF
    function handler(event) {
      var request = event.request;
      var host = request.headers.host.value;

      // Redirect any non-primary domain to sasquatchpermit.com
      if (host !== '${var.primary_domain}') {
        return {
          statusCode: 301,
          statusDescription: 'Moved Permanently',
          headers: {
            'location': { value: 'https://${var.primary_domain}' + request.uri }
          }
        };
      }

      return request;
    }
  EOF
}

# ─── CloudFront Distribution ─────────────────────────────────────────────────

resource "aws_cloudfront_distribution" "site" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  http_version        = "http2and3"
  price_class         = "PriceClass_100"
  comment             = "Sasquatch marketing site — ${local.environment}"

  # Prod: serve main custom domains (excludes separate-cert domains). Dev: no aliases.
  aliases = local.is_prod ? local.all_domains : []

  origin {
    domain_name              = aws_s3_bucket.site.bucket_regional_domain_name
    origin_id                = "s3-site"
    origin_access_control_id = aws_cloudfront_origin_access_control.site.id
  }

  default_cache_behavior {
    target_origin_id       = "s3-site"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true

    cache_policy_id          = "658327ea-f89d-4fab-a63d-7e88639e58f6" # CachingOptimized
    origin_request_policy_id = "88a5eaf4-2fd4-4709-b370-b4c650ea3fcf" # CORS-S3Origin

    # Prod: attach domain redirect function
    dynamic "function_association" {
      for_each = local.is_prod ? [1] : []
      content {
        event_type   = "viewer-request"
        function_arn = aws_cloudfront_function.redirect[0].arn
      }
    }
  }

  # SPA routing: serve index.html for 403/404 from S3
  custom_error_response {
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 10
  }

  custom_error_response {
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 10
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  # Prod: ACM cert with custom domains. Dev: default CloudFront cert.
  viewer_certificate {
    acm_certificate_arn            = local.is_prod ? aws_acm_certificate_validation.site[0].certificate_arn : null
    ssl_support_method             = local.is_prod ? "sni-only" : null
    minimum_protocol_version       = local.is_prod ? "TLSv1.2_2021" : null
    cloudfront_default_certificate = local.is_prod ? false : true
  }
}
