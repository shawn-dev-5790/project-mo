import { Module } from '@nestjs/common'
import { CampaignController } from './campaign.controller'
import { CampaginService } from './campaign.service'

@Module({
  controllers: [CampaignController],
  providers: [CampaginService],
})
export class CampaignModule {}
