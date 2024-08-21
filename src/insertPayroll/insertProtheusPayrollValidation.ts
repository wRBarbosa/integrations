import { Validation } from "./domain/usecases/protocols/validation";

export class InsertProtheusPayrollValidation implements Validation {
  // gross não pode ser menor que netPay
  // discount não pode ser maior que gross
  validate(payload: any): boolean {
    console.log("Validando Protheus...")

    if (!payload.grossPay || payload.grossPay === 0) {
      console.log("Gross pay inválido")
      return false
    }

    return true
  }
}