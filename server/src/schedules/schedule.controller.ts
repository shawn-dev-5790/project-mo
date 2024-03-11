import { Controller, Get } from '@nestjs/common'
import { ScheduleService } from './schedule.service'

@Controller('schedules')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get('/generate')
  generate() {
    return {
      code: '0000',
      message: 'success',
      data: {
        schedule: this.scheduleService.generate(),
      },
    }
  }
}
