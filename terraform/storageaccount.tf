resource "azurerm_storage_account" "storybook_web_storage_account" {
  name                             = "st${var.sub}${var.environment}${var.domain}cmplib${var.sequence}"
  resource_group_name              = data.azurerm_resource_group.kelso_global_storybook_resource_group.name
  location                         = data.azurerm_resource_group.kelso_global_storybook_resource_group.location
  account_tier                     = "Standard"
  account_replication_type         = "LRS"
  allow_nested_items_to_be_public  = false
  cross_tenant_replication_enabled = false
  access_tier                      = "Hot"
  https_traffic_only_enabled       = true
  min_tls_version                  = "TLS1_2"
  public_network_access_enabled    = true
  tags                             = local.tags

  static_website {
    index_document     = "index.html"
    error_404_document = "404.html"
  }

  lifecycle {
    prevent_destroy = true
  }
}