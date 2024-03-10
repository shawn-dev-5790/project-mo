import { Controller, Get } from '@nestjs/common'
import { SiteService } from './site.service'

@Controller('sites')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @Get('/generate')
  generate() {
    return {
      code: '0000',
      message: 'success',
      data: {
        site: this.siteService.generate(),
      },
    }
  }
}
