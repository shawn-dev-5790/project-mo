import { Injectable } from '@nestjs/common'
import { SiteCampaignFactory } from './site_campaign.factory'
import { EventFactory } from 'src/events/event.factory'
import { SiteFactory } from 'src/sites/site.factory'
import { CampaignFactory } from 'src/campaigns/campaign.factory'
import { StatFactory } from 'src/stats/stat.factory'
import { ReportFactory } from 'src/reports/report.factory'
import { ScheduleFactory } from 'src/schedules/schedule.factory'

@Injectable()
export class SiteCampaignsService {
  constructor(
    private readonly siteCampaignFactory: SiteCampaignFactory,
    private readonly eventFactory: EventFactory,
    private readonly siteFactory: SiteFactory,
    private readonly campaignFactory: CampaignFactory,
    private readonly statFactory: StatFactory,
    private readonly reportFactory: ReportFactory,
    private readonly scheduleFactory: ScheduleFactory,
  ) {}

  generate() {
    return this.siteCampaignFactory.generate(
      this.eventFactory.generate(),
      this.siteFactory.generate(),
      this.campaignFactory.generate(),
      this.statFactory.generate(),
      this.reportFactory.generate(),
      this.scheduleFactory.generate(),
    )
  }
}
