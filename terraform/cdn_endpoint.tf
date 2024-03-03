resource "azurerm_cdn_endpoint" "kelso_storybook_cdn_endpoint" {
    name                        = "cdnp-${var.sub}-${var.region}-${var.environment}-${var.domain}-${var.sequence}"
    profile_name                = data.azurerm_cdn_profile.global_shared_cdn.name
    location                    = data.azurerm_cdn_profile.global_shared_cdn.location
    resource_group_name         = data.azurerm_cdn_profile.global_shared_cdn.resource_group_name
    origin_host_header          = azurerm_storage_account.storybook_web_storage_account.primary_web_host
    content_types_to_compress   = ["text/html", "text/plain"]
    is_http_allowed             = false
    is_https_allowed            = true
    tags                        = local.tags

    origin {
      name          = "kelsostorybookorigin"
      host_name     = azurerm_storage_account.storybook_web_storage_account.primary_web_host
      http_port     = 80
      https_port    = 443
    }
}