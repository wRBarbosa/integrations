import { InsertClientPayrollDto } from "../../entities/protocols/insertClientPayrollDto";
import { InsertSupplierPayrollDto } from "../../entities/protocols/insertSupplierPayrollDto";

export interface Adapter {
  adapt(insertClientPayrollDto: InsertClientPayrollDto): InsertSupplierPayrollDto
}