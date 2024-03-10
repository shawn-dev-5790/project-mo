import { Controller, Get } from '@nestjs/common'
import { SiteCampaignsService } from './site_campaign.service'

@Controller('site-campaigns')
export class SiteCampaignController {
  constructor(private readonly siteCampaignService: SiteCampaignsService) {}

  @Get('/generate')
  generate() {
    return {
      code: '0000',
      message: 'success',
      data: this.siteCampaignService.generate(),
    }
  }
}
