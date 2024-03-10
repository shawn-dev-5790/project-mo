import { Controller, Get } from '@nestjs/common'
import { EventService } from './event.service'

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get('/generate')
  generate() {
    return {
      code: '0000',
      message: 'success',
      data: {
        event: this.eventService.generate(),
      },
    }
  }
}