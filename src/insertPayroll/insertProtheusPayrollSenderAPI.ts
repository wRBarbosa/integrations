import { SenderAPI } from "./domain/usecases/protocols/senderAPI";
import { InsertProtheusPayrollDto } from "./domain/entities/protocols/insertProtheusPayrollDto";

export class InsertProtheusPayrollSenderAPI implements SenderAPI {
  constructor(public apiURL: string) { }

  send(insertProtheusPayrollDto: InsertProtheusPayrollDto): void {
    console.log("Enviando ProtheusDto...")
  }
}