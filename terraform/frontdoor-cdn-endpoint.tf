# -------------------------------------------
# -----------FRONT DOOR ---------------------
# -------------------------------------------
resource "azurerm_cdn_frontdoor_endpoint" "kelso_storybook_cdn_endpoint" {
  name                     = "afde-${var.sub}-${var.region}-${var.environment}-${var.domain}-${var.sequence}"
  cdn_frontdoor_profile_id = data.azurerm_cdn_frontdoor_profile.global_shared_cdn.id
  tags                     = local.tags
}

resource "azurerm_cdn_frontdoor_origin_group" "kelso_storybook_cdn_origin_group" {
  name                     = "afdog-${var.sub}-${var.region}-${var.environment}-${var.domain}-${var.sequence}"
  cdn_frontdoor_profile_id = data.azurerm_cdn_frontdoor_profile.global_shared_cdn.id
  session_affinity_enabled = false

  health_probe {
    interval_in_seconds = 240
    path                = "/"
    protocol            = "Http"
    request_type        = "HEAD"
  }

  load_balancing {
    additional_latency_in_milliseconds = 0
    sample_size                        = 4
    successful_samples_required        = 2
  }
}

resource "azurerm_cdn_frontdoor_origin" "kelso_storybook_cdn_origin" {
  name                           = "afdo-${var.sub}-${var.region}-${var.environment}-${var.domain}-${var.sequence}"
  cdn_frontdoor_origin_group_id  = azurerm_cdn_frontdoor_origin_group.kelso_storybook_cdn_origin_group.id
  enabled                        = true
  certificate_name_check_enabled = true
  host_name                      = azurerm_storage_account.storybook_web_storage_account.primary_web_host
  http_port                      = 80
  https_port                     = 443
  origin_host_header             = azurerm_storage_account.storybook_web_storage_account.primary_web_host
  priority                       = 1
  weight                         = 1000
}


resource "azurerm_cdn_frontdoor_rule_set" "kelso_storybook_cdn_ruleset" {
  name                     = "kelsostorybook"
  cdn_frontdoor_profile_id = data.azurerm_cdn_frontdoor_profile.global_shared_cdn.id
}

resource "azurerm_cdn_frontdoor_rule" "kelso_storybook_cdn_ruleset_caching_rule" {
  name                      = "cachingrule"
  cdn_frontdoor_rule_set_id = azurerm_cdn_frontdoor_rule_set.kelso_storybook_cdn_ruleset.id
  order                     = 1
  behavior_on_match         = "Continue"

  actions {
    route_configuration_override_action {
      query_string_caching_behavior = "UseQueryString"
      cache_behavior                = "OverrideAlways"
      cache_duration                = "30.00:00:00"
      compression_enabled           = true
    }
  }

  depends_on = [
    azurerm_cdn_frontdoor_origin_group.kelso_storybook_cdn_origin_group,
    azurerm_cdn_frontdoor_origin.kelso_storybook_cdn_origin
  ]
}



resource "azurerm_cdn_frontdoor_route" "kelso_storybook_cdn_route" {
  name                          = "afdr-${var.sub}-${var.region}-${var.environment}-${var.domain}-${var.sequence}"
  cdn_frontdoor_endpoint_id     = azurerm_cdn_frontdoor_endpoint.kelso_storybook_cdn_endpoint.id
  cdn_frontdoor_origin_group_id = azurerm_cdn_frontdoor_origin_group.kelso_storybook_cdn_origin_group.id
  cdn_frontdoor_origin_ids      = [azurerm_cdn_frontdoor_origin.kelso_storybook_cdn_origin.id]
  cdn_frontdoor_rule_set_ids    = [azurerm_cdn_frontdoor_rule_set.kelso_storybook_cdn_ruleset.id]
  enabled                       = true
  link_to_default_domain        = true

  forwarding_protocol    = "MatchRequest"
  https_redirect_enabled = false
  patterns_to_match      = ["/*"]
  supported_protocols    = ["Https"]

  cache {
    query_string_caching_behavior = "UseQueryString"
    compression_enabled           = true
    content_types_to_compress = [
      "application/eot",
      "application/font",
      "application/javascript",
      "application/json",
      "application/xml",
      "image/svg+xml",
      "text/css",
      "text/csv",
      "text/html",
      "text/javascript",
      "text/plain",
      "text/xml"
    ]
  }
}