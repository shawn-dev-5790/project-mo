import { Controller, Get } from '@nestjs/common'
import { SiteSettingService } from './site_setting.service'

@Controller('site-settings')
export class SiteSettingController {
  constructor(private readonly siteSettingService: SiteSettingService) {}

  @Get('/generate')
  generate() {
    return {
      code: '0000',
      message: 'success',
      data: {
        stat: this.siteSettingService.generate(),
      },
    }
  }
}
