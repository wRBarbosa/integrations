import { TenantConfiguration } from "./tenantConfiguration"

export interface TenantConfigurationRepository {
  get(): TenantConfiguration
}