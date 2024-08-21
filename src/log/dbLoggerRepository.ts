import { LogDto } from "./logDto"

export interface DBLoggerRepository {
  insert(logDto: LogDto): void
}