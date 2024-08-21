import { InsertClientPayrollDto } from "./domain/entities/protocols/insertClientPayrollDto";
import { InsertProtheusPayrollDto } from "./domain/entities/protocols/insertProtheusPayrollDto";
import { Adapter } from "./domain/usecases/protocols/adapter";

export class InsertProtheusPayrollAdapter implements Adapter {
  adapt(insertClientPayrollDto: InsertClientPayrollDto): InsertProtheusPayrollDto {
    console.log("Transformando ClientDto em SupplierDto...")
    const { grossPay, netPay, deductions } = insertClientPayrollDto
    return { grossPay, netPay, deductions }
  }
}