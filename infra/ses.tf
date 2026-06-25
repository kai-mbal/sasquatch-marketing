# ─── SES Domain Identity ──────────────────────────────────────────────────────

resource "aws_ses_domain_identity" "primary" {
  domain = var.primary_domain
}

# TXT record for SES domain verification
resource "aws_route53_record" "ses_verification" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "_amazonses.${var.primary_domain}"
  type    = "TXT"
  ttl     = 600
  records = [aws_ses_domain_identity.primary.verification_token]
}

resource "aws_ses_domain_identity_verification" "primary" {
  domain     = aws_ses_domain_identity.primary.id
  depends_on = [aws_route53_record.ses_verification]
}

# ─── SES DKIM ────────────────────────────────────────────────────────────────

resource "aws_ses_domain_dkim" "primary" {
  domain = aws_ses_domain_identity.primary.domain
}

resource "aws_route53_record" "ses_dkim" {
  count = 3

  zone_id = aws_route53_zone.primary.zone_id
  name    = "${aws_ses_domain_dkim.primary.dkim_tokens[count.index]}._domainkey.${var.primary_domain}"
  type    = "CNAME"
  ttl     = 600
  records = ["${aws_ses_domain_dkim.primary.dkim_tokens[count.index]}.dkim.amazonses.com"]
}

# ─── SES Mail From domain ────────────────────────────────────────────────────

resource "aws_ses_domain_mail_from" "primary" {
  domain           = aws_ses_domain_identity.primary.domain
  mail_from_domain = "mail.${var.primary_domain}"
}

resource "aws_route53_record" "ses_mail_from_mx" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "mail.${var.primary_domain}"
  type    = "MX"
  ttl     = 600
  records = ["10 feedback-smtp.us-east-1.amazonses.com"]
}

resource "aws_route53_record" "ses_mail_from_spf" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "mail.${var.primary_domain}"
  type    = "TXT"
  ttl     = 600
  records = ["v=spf1 include:amazonses.com ~all"]
}
