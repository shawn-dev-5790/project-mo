import { Module } from '@nestjs/common'
import { SiteCampaignController } from './site_campaign.controller'
import { SiteCampaignsService } from './site_campaign.service'
import { SiteCampaignFactory } from './site_campaign.factory'
import { EventFactory } from 'src/events/event.factory'
import { SiteFactory } from 'src/sites/site.factory'
import { CampaignFactory } from 'src/campaigns/campaign.factory'
import { StatFactory } from 'src/stats/stat.factory'
import { ReportFactory } from 'src/reports/report.factory'

@Module({
  controllers: [SiteCampaignController],
  providers: [
    SiteCampaignsService,
    SiteCampaignFactory,
    EventFactory,
    SiteFactory,
    CampaignFactory,
    StatFactory,
    ReportFactory,
  ],
})
export class SiteCampaignModule {}
