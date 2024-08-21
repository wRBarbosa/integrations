import { LogDto } from "./logDto"

export interface CloudWatchRepository {
  log(logDto: LogDto): void
}