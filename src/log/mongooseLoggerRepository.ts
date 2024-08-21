import { DBLoggerRepository } from "./dbLoggerRepository"
import { LogDto } from "./logDto"

export class MongooseLoggerRepository implements DBLoggerRepository {
  constructor(private mongoose: any) { }

  insert(logDto: LogDto): void {}
}