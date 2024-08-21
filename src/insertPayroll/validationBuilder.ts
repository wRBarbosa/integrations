import { TenantConfiguration } from "./domain/usecases/protocols/tenantConfiguration";
import { Validation } from "./domain/usecases/protocols/validation";
import { InsertDefaultPayrollValidation } from "./insertDefaultPayrollValidation";
import { InsertProtheusPayrollValidation } from "./insertProtheusPayrollValidation";

export class ValidationBuilder {
  constructor(public tenantConfiguration: TenantConfiguration) {}

  build(): Validation {
    if (this.tenantConfiguration.payrollSupplier === "protheus") {
      return new InsertProtheusPayrollValidation()
    }
    return new InsertDefaultPayrollValidation()
  }
}