#!/usr/bin/env bash
set -euo pipefail

# ─── Sasquatch Site Deployment Script ─────────────────────────────────────────
# Usage: ./deploy.sh [--skip-build]

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
AWS_PROFILE="sasquatch-prod"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}=== Sasquatch Site Deploy ===${NC}"

# Get Terraform outputs
cd "$SCRIPT_DIR"
S3_BUCKET=$(terraform output -raw s3_bucket_name)
CF_DIST_ID=$(terraform output -raw cloudfront_distribution_id)

echo -e "${YELLOW}S3 Bucket:${NC}   $S3_BUCKET"
echo -e "${YELLOW}CF Dist ID:${NC}  $CF_DIST_ID"

# Build (unless --skip-build)
if [[ "${1:-}" != "--skip-build" ]]; then
  echo -e "\n${GREEN}Building production bundle...${NC}"
  cd "$PROJECT_ROOT"
  npm run build
fi

# Sync to S3
echo -e "\n${GREEN}Uploading to S3...${NC}"
aws s3 sync "$PROJECT_ROOT/dist" "s3://$S3_BUCKET" \
  --delete \
  --profile "$AWS_PROFILE" \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "index.html" \
  --exclude "*.json" \
  --exclude "*.mov"

# Upload index.html and JSON with short cache
aws s3 cp "$PROJECT_ROOT/dist/index.html" "s3://$S3_BUCKET/index.html" \
  --profile "$AWS_PROFILE" \
  --cache-control "public, max-age=60, s-maxage=60" \
  --content-type "text/html"

# Upload any JSON files (manifest, etc.)
find "$PROJECT_ROOT/dist" -name "*.json" -exec \
  aws s3 cp {} "s3://$S3_BUCKET/{}" \
  --profile "$AWS_PROFILE" \
  --cache-control "public, max-age=60" \; 2>/dev/null || true

# Invalidate CloudFront cache
echo -e "\n${GREEN}Invalidating CloudFront cache...${NC}"
aws cloudfront create-invalidation \
  --distribution-id "$CF_DIST_ID" \
  --paths "/*" \
  --profile "$AWS_PROFILE" \
  --output text

echo -e "\n${GREEN}Deploy complete!${NC}"
echo -e "Site: https://sasquatchpermit.com"
