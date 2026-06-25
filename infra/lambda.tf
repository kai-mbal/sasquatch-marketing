# ─── Lambda Function ──────────────────────────────────────────────────────────

data "archive_file" "contact_form" {
  type        = "zip"
  source_dir  = "${path.module}/lambda/contact-form"
  output_path = "${path.module}/.build/contact-form.zip"
}

resource "aws_lambda_function" "contact_form" {
  function_name    = "sasquatch-contact-form-${local.environment}"
  role             = aws_iam_role.lambda_contact_form.arn
  handler          = "index.handler"
  runtime          = "nodejs20.x"
  timeout          = 10
  memory_size      = 128
  filename         = data.archive_file.contact_form.output_path
  source_code_hash = data.archive_file.contact_form.output_base64sha256

  environment {
    variables = {
      RECIPIENT_EMAIL = var.recipient_email
      SENDER_EMAIL    = var.sender_email
      ALLOWED_ORIGIN  = local.is_prod ? "https://${var.primary_domain}" : "*"
      BEEHIIV_API_KEY = var.beehiiv_api_key
      BEEHIIV_PUB_ID  = var.beehiiv_pub_id
    }
  }

  depends_on = [aws_iam_role_policy_attachment.lambda_logs]
}

# ─── API Gateway (HTTP API v2) ────────────────────────────────────────────────

resource "aws_apigatewayv2_api" "contact" {
  name          = "sasquatch-contact-api-${local.environment}"
  protocol_type = "HTTP"

  cors_configuration {
    allow_origins = local.is_prod ? [
      "https://${var.primary_domain}",
      "https://www.${var.primary_domain}",
    ] : ["*"]
    allow_methods = ["POST", "OPTIONS"]
    allow_headers = ["Content-Type"]
    max_age       = 86400
  }
}

resource "aws_apigatewayv2_stage" "default" {
  api_id      = aws_apigatewayv2_api.contact.id
  name        = "$default"
  auto_deploy = true

  access_log_settings {
    destination_arn = aws_cloudwatch_log_group.api_gateway.arn
    format = jsonencode({
      requestId      = "$context.requestId"
      ip             = "$context.identity.sourceIp"
      requestTime    = "$context.requestTime"
      httpMethod     = "$context.httpMethod"
      routeKey       = "$context.routeKey"
      status         = "$context.status"
      protocol       = "$context.protocol"
      responseLength = "$context.responseLength"
    })
  }
}

resource "aws_cloudwatch_log_group" "api_gateway" {
  name              = "/aws/apigateway/sasquatch-contact-${local.environment}"
  retention_in_days = 14
}

resource "aws_apigatewayv2_integration" "contact_lambda" {
  api_id                 = aws_apigatewayv2_api.contact.id
  integration_type       = "AWS_PROXY"
  integration_uri        = aws_lambda_function.contact_form.invoke_arn
  payload_format_version = "2.0"
}

resource "aws_apigatewayv2_route" "contact_post" {
  api_id    = aws_apigatewayv2_api.contact.id
  route_key = "POST /submit"
  target    = "integrations/${aws_apigatewayv2_integration.contact_lambda.id}"
}

# Allow API Gateway to invoke Lambda
resource "aws_lambda_permission" "api_gateway" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.contact_form.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.contact.execution_arn}/*/*"
}
