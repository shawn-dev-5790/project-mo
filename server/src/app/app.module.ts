import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProductModule } from '../products/product.module'
import { CampaignModule } from 'src/campaigns/campaign.module'
import { LinkedProductModule } from 'src/linked_products/linked_product.module'
import { EventModule } from 'src/events/event.module'
import { SiteModule } from 'src/sites/site.module'
import { ReportModule } from 'src/reports/report.module'
import { ScheduleModule } from 'src/schedules/schedule.module'
import { AudienceModule } from 'src/audiences/audience.module'
import { CreativeMoudle } from 'src/creatives/creative.module'
import { MemberModule } from 'src/members/member.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    MemberModule,
    EventModule,
    SiteModule,
    CampaignModule,
    ReportModule,
    ScheduleModule,
    AudienceModule,
    CreativeMoudle,
    ProductModule,
    LinkedProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
