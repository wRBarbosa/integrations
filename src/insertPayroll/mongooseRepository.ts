import { TenantConfiguration } from "./domain/usecases/protocols/tenantConfiguration";
import { TenantConfigurationRepository } from "./domain/usecases/protocols/tenantConfigurationRepository";

export class MongooseRepository implements TenantConfigurationRepository {
  constructor(private mongoose: any) { }

  get(): TenantConfiguration {
    console.log("Pegando tenant do Mongo...")
    return {
      payrollSupplier: "protheus", apiURL: ""
    }
  }
}