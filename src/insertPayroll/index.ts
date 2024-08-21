import { InsertPayrollService } from "./insertPayrollService";

const fakePayload = {
  grossPay: 10,
  netPay: 20,
  deductions: 30,
}

const insertPayrollService = new InsertPayrollService()
insertPayrollService.insert(fakePayload)