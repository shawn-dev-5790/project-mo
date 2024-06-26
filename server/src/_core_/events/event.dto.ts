import { ApiProperty, IntersectionType, PartialType, PickType } from '@nestjs/swagger'
import { EventEntity } from './event.entity'
import { BasePageDto, BaseResDto } from 'src/_core_/base.dto'

// entity > dto
export class EventDto extends EventEntity {
  @ApiProperty({ example: '1234-5678-1234-5678', description: 'event id' })
  id: string

  @ApiProperty({ example: 'HOLYDAY', description: 'event type' })
  type: string

  @ApiProperty({
    example: 'https://i.pinimg.com/564x/b5/e2/54/b5e254e54d58469dd56334c1334c29cf.jpg',
    description: 'event img',
  })
  img: string

  @ApiProperty({ example: 'black friday is coming', description: 'event name' })
  name: string

  @ApiProperty({ example: 'black friday....', description: 'event contents' })
  cont: string

  @ApiProperty({ example: '2021-08-08T00:00:00.000Z', description: 'created date' })
  created_at: Date

  @ApiProperty({ example: '2021-08-08T00:00:00.000Z', description: 'updated date' })
  updated_at: Date

  @ApiProperty({ example: '2021-08-08T00:00:00.000Z', description: 'deleted date' })
  deleted_at: Date | null
}

// response
export class DataForEventDetailDto {
  @ApiProperty({ type: EventDto })
  event: EventDto
}
export class DataForEventListDto extends BasePageDto {
  @ApiProperty({ type: [EventDto] })
  events: EventDto[]
}

// response
export class ResEventDetailDto extends BaseResDto {
  @ApiProperty({ type: DataForEventDetailDto })
  data: DataForEventDetailDto
}
export class ResEventListDto extends BaseResDto {
  @ApiProperty({ type: DataForEventListDto })
  data: DataForEventListDto
}

// request
export class EventQueryParamDto extends IntersectionType(
  PickType(BasePageDto, ['page', 'size'] as const),
  PickType(EventDto, ['id'] as const),
) {}
export class BodyForCreateEventDto extends PickType(EventDto, ['type', 'img', 'name', 'cont'] as const) {}
export class BodyForUpdateEventDto extends IntersectionType(
  PickType(EventDto, ['name'] as const),
  PartialType(PickType(EventDto, ['cont'] as const)),
) {}
