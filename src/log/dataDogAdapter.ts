import { DataDogRepository } from "./dataDogRepository"
import { LogDto } from "./logDto"

export class DataDogAdapter implements DataDogRepository {
  constructor(private dataDogLib: any) {}

  log(logDto: LogDto): void {}
}