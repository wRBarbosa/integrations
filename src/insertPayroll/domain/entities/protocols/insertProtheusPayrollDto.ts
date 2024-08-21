import { InsertSupplierPayrollDto } from "./insertSupplierPayrollDto"

export interface InsertProtheusPayrollDto extends InsertSupplierPayrollDto {
  grossPay: number
  netPay: number
  deductions: number
}