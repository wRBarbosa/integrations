import { LogDto } from "./logDto"

export interface LoggerStrategy {
  log(logDto: LogDto): void
}