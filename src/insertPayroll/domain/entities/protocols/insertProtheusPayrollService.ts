import { InsertPayrollService } from "../../../insertPayrollService";
import { InsertProtheusPayrollAdapter } from "../../../insertProtheusPayrollAdapter";
import { InsertProtheusPayrollSenderAPI } from "../../../insertProtheusPayrollSenderAPI";
import { InsertSupplierPayrollService } from "../../usecases/protocols/insertSupplierPayrollService";
import { InsertClientPayrollDto } from "./insertClientPayrollDto";

export class InsertProtheusPayrollService implements InsertSupplierPayrollService {
  constructor(public adapter: InsertProtheusPayrollAdapter, public sender: InsertProtheusPayrollSenderAPI) { }

  insertPayroll(insertClientPayrollDto: InsertClientPayrollDto): void {
    console.log("Inserindo dados no Protheus...")
  }

  insertPayrollArray(insertPayrollService: InsertPayrollService[]): void {
  }
}