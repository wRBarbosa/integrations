import { InsertSupplierPayrollDto } from "../../entities/protocols/insertSupplierPayrollDto"

export interface Sender {
  send(insertPayrollSupplierDto: InsertSupplierPayrollDto): void
}