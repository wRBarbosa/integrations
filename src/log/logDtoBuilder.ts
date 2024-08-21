import { LogDto } from "./logDto"

export class LogDtoBuilder {
  constructor() { }

  build(request: any): LogDto {
    const { event, text, ip } = request
    return { event, text, ip }
  }

  buildArray(request: any): LogDto[] {
    const response: LogDto[] = []

    if (Array.isArray(request)) {
      for (const item of response) {
        const { event, text, ip } = item
        response.push({ event, text, ip })
      }
    }

    return response
  }
}