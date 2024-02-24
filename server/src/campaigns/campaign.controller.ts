import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CampaginService } from './campaign.service'
import { ApiProperty } from '@nestjs/swagger'
import { Campaign, CampaignOptions } from './campaign.dto'

export class CreateCampaignComponentReq {
  @ApiProperty({
    example: {
      id: 'AD+SF1AE%@#A2D5AF',
      channelId: 'email',
      title: 'title',
      desc: 'desc',
      stat: null,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
    },
  })
  campaign: Campaign
  @ApiProperty()
  options: CampaignOptions
}

@Controller('campaigns')
export class CampaignController {
  constructor(private readonly campaignService: CampaginService) {}

  @Get()
  getCampaigns() {
    return this.campaignService.readCampaigns()
  }

  @Get(':campaignId')
  getCampaignById(@Param('campaignId') campaignId: string) {
    return this.campaignService.readCampaignById(campaignId)
  }

  @Post()
  createCampaignComponent(@Body() req: CreateCampaignComponentReq): string {
    return this.campaignService.createCampaign(req.campaign, req.options)
  }
}
