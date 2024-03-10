import { Controller, Get } from '@nestjs/common'
import { StatService } from './stat.service'

@Controller('stats')
export class StatController {
  constructor(private readonly statService: StatService) {}

  @Get('/generate')
  generate() {
    return {
      code: '0000',
      message: 'success',
      data: {
        stat: this.statService.generate(),
      },
    }
  }
}
