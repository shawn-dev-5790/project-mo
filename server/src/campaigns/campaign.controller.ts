import { Controller, Get } from '@nestjs/common'
import { CampaginService } from './campaign.service'

@Controller('campaigns')
export class CampaignController {
  constructor(private readonly campaignService: CampaginService) {}

  @Get('/generate')
  generate() {
    return {
      code: '0000',
      message: 'success',
      data: {
        campaign: this.campaignService.generate(),
      },
    }
  }
}
