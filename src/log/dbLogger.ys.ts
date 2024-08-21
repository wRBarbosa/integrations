import { DBLoggerRepository } from "./dbLoggerRepository"
import { LogDto } from "./logDto"
import { LoggerStrategy } from "./loggerStrategy"

export class DBLogger implements LoggerStrategy {
  constructor(private loggerRepository: DBLoggerRepository) { }

  log(logDto: LogDto): void { }
}