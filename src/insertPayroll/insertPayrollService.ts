import { InsertSupplierPayrollService } from "./domain/usecases/protocols/insertSupplierPayrollService";
import { Validation } from "./domain/usecases/protocols/validation";
import { InsertClientPayrollDtoBuilder } from "./insertClientPayrollDtoBuilder";
import { InsertSupplierPayrollServiceBuilder } from "./insertSupplierPayrollServiceBuilder";
import { MongooseRepository } from "./mongooseRepository";
import { TenantConfigurationGetter } from "./tenantConfigurationGetter";
import { ValidationBuilder } from "./validationBuilder";
import { WebHookTrigger } from "./webHookTrigger";

export class InsertPayrollService {
  private validation: Validation
  private insertSupplierPayrollServiceBuilder: InsertSupplierPayrollServiceBuilder
  private insertClientPayrollDtoBuilder: InsertClientPayrollDtoBuilder
  private webHookTrigger: WebHookTrigger
  private tenantConfigurationGetter: TenantConfigurationGetter

  constructor() {
      const mongooseRepository = new MongooseRepository("Mandando dados...")

      this.tenantConfigurationGetter = new TenantConfigurationGetter(mongooseRepository)
      const tenantConfiguration = this.tenantConfigurationGetter.get()

      const validationBuilder = new ValidationBuilder(tenantConfiguration)
      this.validation = validationBuilder.build()

      this.insertSupplierPayrollServiceBuilder = new InsertSupplierPayrollServiceBuilder(tenantConfiguration)

      this.insertClientPayrollDtoBuilder = new InsertClientPayrollDtoBuilder()

      this.webHookTrigger = new WebHookTrigger(tenantConfiguration)
    }

  insert(payload: any): void {
    const isValid = this.validation.validate(payload)
    if (!isValid) {
      return
    }

    const insertClientPayrollDto = this.insertClientPayrollDtoBuilder.build(payload)
    const insertSupplierPayrollService = this.insertSupplierPayrollServiceBuilder.build()
    insertSupplierPayrollService.insertPayroll(insertClientPayrollDto)
    this.webHookTrigger.trigger()

    console.log("Dados inseridos: ", payload)
  }
}