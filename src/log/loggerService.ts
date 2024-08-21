import { LogDtoBuilder } from "./logDtoBuilder"
import { Logger } from "./logger"
import { TenantConfigurationGetter } from "./tenantConfigurationGetter"

export class LoggerService {
  constructor(private logDtoBuilder: LogDtoBuilder, private logger: Logger, tenantConfigurationGetter: TenantConfigurationGetter) { }

  log(request: any): void {}
}