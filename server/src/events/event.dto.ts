import { ApiProperty, PartialType, PickType } from '@nestjs/swagger'
import { EventEntity } from './event.entity'

export class EventDto implements EventEntity {
  @ApiProperty({ example: '1234-5678-1234-5678', description: 'event id' })
  id: string

  @ApiProperty({ example: 'HOLYDAY', description: 'event type' })
  type: string

  @ApiProperty({ example: 'black friday is coming', description: 'event name' })
  name: string

  @ApiProperty({ example: 'black friday....', description: 'event contents' })
  cont: string

  @ApiProperty({ example: '2021-08-08T00:00:00.000Z', description: 'created date' })
  created_at: Date

  @ApiProperty({ example: '2021-08-08T00:00:00.000Z', description: 'updated date' })
  updated_at: Date

  @ApiProperty({ example: '2021-08-08T00:00:00.000Z', description: 'deleted date' })
  deleted_at: Date
}

export class EventDataDto {
  @ApiProperty({ type: EventDto, description: 'data.event' })
  event: EventDto

  @ApiProperty({ type: [EventDto], isArray: true, description: 'data.events' })
  events: EventDto[]
}

export class EventResDto {
  @ApiProperty({ example: '0000', description: 'res.code' })
  code: string

  @ApiProperty({ example: 'success', description: 'res.message' })
  message: string

  @ApiProperty({ type: EventDataDto, description: 'res.data' })
  data: EventDataDto
}

export class CreateEventDto extends PickType(EventDto, ['type', 'name', 'cont'] as const) {}
export class UpdateEventDto extends PartialType(CreateEventDto) {}

export class CreateEventReqDto extends CreateEventDto {}
export class CreateEventResDto extends EventResDto {}

export class UpdateEventReqDto extends UpdateEventDto {}
export class UpdateEventResDto extends EventResDto {}
