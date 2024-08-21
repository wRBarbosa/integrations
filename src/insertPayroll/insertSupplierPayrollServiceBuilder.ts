import { InsertProtheusPayrollService } from "./domain/entities/protocols/insertProtheusPayrollService";
import { InsertSupplierPayrollService } from "./domain/usecases/protocols/insertSupplierPayrollService";
import { TenantConfiguration } from "./domain/usecases/protocols/tenantConfiguration";
import { InsertProtheusPayrollAdapter } from "./insertProtheusPayrollAdapter";
import { InsertProtheusPayrollSenderAPI } from "./insertProtheusPayrollSenderAPI";

export class InsertSupplierPayrollServiceBuilder {
  constructor(public tenantConfiguration: TenantConfiguration) { }

  build(): InsertSupplierPayrollService {
    const adapter = new InsertProtheusPayrollAdapter()
    const sender = new InsertProtheusPayrollSenderAPI("")
    console.log("Buildando InsertSupplierPayrollService...")
    return new InsertProtheusPayrollService(adapter, sender)
  }
}