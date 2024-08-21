import { TenantConfiguration } from "./domain/usecases/protocols/tenantConfiguration";
import { TenantConfigurationRepository } from "./domain/usecases/protocols/tenantConfigurationRepository";

export class TenantConfigurationGetter {
  constructor(public tenantConfigurationRepository: TenantConfigurationRepository) { }

  get(): TenantConfiguration {
    return this.tenantConfigurationRepository.get()
  }
}