import { CloudWatchRepository } from "./cloudWatchRepository"
import { LogDto } from "./logDto"
import { LoggerStrategy } from "./loggerStrategy"

export class CloudWatchLogger implements LoggerStrategy {
  constructor(private cloudWatchRepository: CloudWatchRepository) { }

  log(logDto: LogDto): void { }
}