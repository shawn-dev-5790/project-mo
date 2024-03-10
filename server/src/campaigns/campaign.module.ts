import { Module } from '@nestjs/common'
import { CampaignController } from './campaign.controller'
import { CampaginService } from './campaign.service'
import { CampaignFactory } from './campaign.factory'

@Module({
  controllers: [CampaignController],
  providers: [CampaginService, CampaignFactory],
})
export class CampaignModule {}
