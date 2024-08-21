import { InsertClientPayrollDto } from "./domain/entities/protocols/insertClientPayrollDto"

export class InsertClientPayrollDtoBuilder {
  build(payload: any): InsertClientPayrollDto {
    const { grossPay, netPay, deductions } = payload
    console.log("Buildando InsertClientPayrollDto...")
    return { grossPay, netPay, deductions }
  }

  buildArray(payload: any): InsertClientPayrollDto[] {
    const response: InsertClientPayrollDto[] = []

    if (Array.isArray(payload)) {
      for (const item of payload) {
        const { grossPay, netPay, deductions } = item
        response.push({ grossPay, netPay, deductions })
      }
    }

    return response
  }
}