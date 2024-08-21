import { TenantConfiguration } from "./tenantConfiguration"
import { TenantConfigurationRepository } from "./tenantConfigurationRepository"

export class TenantConfigurationGetter {
  constructor(private tenantConfigurationRepository: TenantConfigurationRepository) { }

  get(tenantId: any): TenantConfiguration {
    const { payrollSupplier, apiUrl } = tenantId
    return { payrollSupplier, apiUrl }
  }
}