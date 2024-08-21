import { TenantConfiguration } from "./domain/usecases/protocols/tenantConfiguration";

export class WebHookTrigger {
  constructor(public tenantConfiguration: TenantConfiguration) { }

  trigger(): void { 
    console.log("Disparando Webhook...")
  }
}