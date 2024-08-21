import { DataDogRepository } from "./dataDogRepository"
import { LogDto } from "./logDto"
import { LoggerStrategy } from "./loggerStrategy"

export class DataDogLogger implements LoggerStrategy {
  constructor(private dataDogRepository: DataDogRepository) {}

  log(logDto: LogDto): void {}
}