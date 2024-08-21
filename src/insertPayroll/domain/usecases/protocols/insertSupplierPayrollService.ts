import { Adapter } from "./adapter"
import { InsertClientPayrollDto } from "../../entities/protocols/insertClientPayrollDto"
import { Sender } from "./sender"

export interface InsertSupplierPayrollService {
  adapter: Adapter
  sender: Sender
  insertPayroll(insertClientPayrollDto: InsertClientPayrollDto): void
}