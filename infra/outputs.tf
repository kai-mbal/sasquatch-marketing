# ─── Outputs ──────────────────────────────────────────────────────────────────

output "environment" {
  description = "Current environment"
  value       = local.environment
}

output "website_url" {
  description = "Website URL"
  value       = local.is_prod ? "https://${var.primary_domain}" : "https://${aws_cloudfront_distribution.site.domain_name}"
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID (needed for cache invalidation on deploy)"
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name"
  value       = aws_cloudfront_distribution.site.domain_name
}

output "s3_bucket_name" {
  description = "S3 bucket name for site files"
  value       = aws_s3_bucket.site.id
}

output "contact_api_url" {
  description = "API Gateway URL for contact form submissions"
  value       = "${aws_apigatewayv2_api.contact.api_endpoint}/submit"
}

output "ses_verification_status" {
  description = "SES domain verification status"
  value       = aws_ses_domain_identity_verification.primary.id
}

output "primary_nameservers" {
  description = "Nameservers for the primary hosted zone (update domain registration)"
  value       = aws_route53_zone.primary.name_servers
}

output "redirect_nameservers" {
  description = "Nameservers for each redirect hosted zone"
  value       = { for d, z in aws_route53_zone.redirects : d => z.name_servers }
}
