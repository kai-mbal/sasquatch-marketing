variable "aws_profile" {
  description = "AWS CLI profile to use"
  type        = string
  default     = "sasquatch-prod"
}

variable "primary_domain" {
  description = "Primary domain for the website"
  type        = string
  default     = "sasquatchpermit.com"
}

variable "redirect_domains" {
  description = "Domains that redirect to the primary domain"
  type        = list(string)
  default = [
    "sasquatchpermit.co",
    "sasquatchpermit.io",
    "sasquatchpermit.net",
    "sasquatchpermit.org",
    "sasquatchrisk.com",
  ]
}

variable "separate_cert_domains" {
  description = "Redirect domains that get their own ACM cert (to stay under the 10-domain ACM limit)"
  type        = list(string)
  default     = ["sasquatchrisk.com"]
}


variable "beehiiv_api_key" {
  description = "Beehiiv API key for newsletter subscriptions"
  type        = string
  sensitive   = true
}

variable "beehiiv_pub_id" {
  description = "Beehiiv publication ID"
  type        = string
  default     = "pub_3a325435-678c-4156-9fa6-a0cb3cacd07f"
}

variable "recipient_email" {
  description = "Email address to receive contact form submissions"
  type        = string
  default     = "contact@sasquatchpermit.com"
}

variable "sender_email" {
  description = "Email address used as the From address for form notifications"
  type        = string
  default     = "noreply@sasquatchpermit.com"
}

locals {
  # Use Terraform workspace as the environment name
  environment = terraform.workspace

  # Whether this is a production deployment (enables custom domains)
  is_prod = terraform.workspace == "prod"
}
