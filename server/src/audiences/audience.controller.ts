import { Controller, Get } from '@nestjs/common'
import { AudienceService } from './audience.service'

@Controller('audiences')
export class AudienceController {
  constructor(private readonly audienceService: AudienceService) {}

  @Get('/generate')
  generate() {
    return {
      code: '0000',
      message: 'success',
      data: {
        event: this.audienceService.generate(),
      },
    }
  }
}
