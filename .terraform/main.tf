# For suggested naming conventions, refer to:
#   https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/naming-and-tagging

terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=4.16.0"
    }
  }

  backend "azurerm" {}
}

provider "azurerm" {
  features {}
}

data "azurerm_resource_group" "kelso_global_storybook_resource_group" {
  name = "rg-${var.sub}-${var.region}-${var.environment}-storybook-${var.sequence}"
}

data "azurerm_resource_group" "global_shared_resource_group" {
  name = "rg-${var.sub}-${var.region}-${var.environment}-shared-${var.sequence}"
}


data "azurerm_cdn_frontdoor_profile" "global_shared_cdn" {
  name                = "afd-${var.sub}-${var.region}-${var.environment}-shared-${var.sequence}"
  resource_group_name = data.azurerm_resource_group.global_shared_resource_group.name
}