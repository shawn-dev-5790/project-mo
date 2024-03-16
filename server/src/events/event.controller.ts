import { Controller, Get, Query } from '@nestjs/common'
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

  @Get('/getnrateMany')
  generateMany(@Query('size') size: string, @Query('page') page: string, @Query('lang') lang: string) {
    return {
      code: '0000',
      message: 'success',
      data: this.eventService.generateMany(Number(size), Number(page), lang),
    }
  }
}
