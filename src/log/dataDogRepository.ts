import { LogDto } from "./logDto"

export interface DataDogRepository {
  log(logDto: LogDto): void
}