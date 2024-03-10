import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProductModule } from '../products/product.module'
import { CampaignModule } from 'src/campaigns/campaign.module'
import { LinkedProductModule } from 'src/linked_products/linked_product.module'
import { EventModule } from 'src/events/event.module'
import { SiteCampaignModule } from 'src/site_campaigns/site_campaign.module'
import { SiteModule } from 'src/sites/site.module'
import { StatModule } from 'src/stats/stat.moudle'
import { ReportModule } from 'src/reports/report.module'

@Module({
  imports: [
    SiteCampaignModule,
    EventModule,
    SiteModule,
    CampaignModule,
    StatModule,
    ReportModule,
    ProductModule,
    LinkedProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
