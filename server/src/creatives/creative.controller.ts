import { Controller, Get } from '@nestjs/common'
import { CreativeService } from './creative.service'

@Controller('creatives')
export class CreativeController {
  constructor(private readonly creativeService: CreativeService) {}

  @Get('/generate')
  generate() {
    return {
      code: '0000',
      message: 'success',
      data: {
        event: this.creativeService.generate(),
      },
    }
  }
}
