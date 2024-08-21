import { LogDtoBuilder } from "./logDtoBuilder"
import { LoggerStrategy } from "./loggerStrategy"

export class Logger {
  constructor(private strategy: LoggerStrategy) { }

  log(logDtoBuilder: LogDtoBuilder): void {}

  private setStategy(loggerStrategy: LoggerStrategy): void {}
}