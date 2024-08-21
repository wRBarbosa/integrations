import { TenantConfiguration } from "./tenantConfiguration"
import { TenantConfigurationRepository } from "./tenantConfigurationRepository"

export class MongooseRepository implements TenantConfigurationRepository {
  constructor(private mongoose: any) {}

  get(): TenantConfiguration {
    return {
      payrollSupplier: "protheus",
      apiUrl: ""
    }
  }
}