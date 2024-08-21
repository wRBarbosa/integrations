import { Validation } from "./domain/usecases/protocols/validation";

export class InsertDefaultPayrollValidation implements Validation {
  validate(payload: any): boolean {
    console.log("Validando default...")
    return true
  }
}