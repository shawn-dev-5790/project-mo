export class CreateEventDTO {
  readonly type: string
  readonly name: string
  readonly cont: string
}

export class UpdateEventDTO {
  readonly type?: string
  readonly name?: string
  readonly cont?: string
}
