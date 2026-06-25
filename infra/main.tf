terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# Primary provider — us-east-1 required for CloudFront + ACM
provider "aws" {
  region  = "us-east-1"
  profile = var.aws_profile

  default_tags {
    tags = {
      Project     = "sasquatch-site"
      Environment = terraform.workspace
      ManagedBy   = "terraform"
    }
  }
}
