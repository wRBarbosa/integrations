import { CloudWatchRepository } from "./cloudWatchRepository"
import { LogDto } from "./logDto"

export class CloudWatchAdapter implements CloudWatchRepository {
  constructor(private cloudWatchAdapter: any) {}

  log(logDto: LogDto): void {}
}