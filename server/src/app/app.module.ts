import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProductModule } from '../products/product.module'
import { CampaignModule } from 'src/campaigns/campaign.module'

@Module({
  imports: [ProductModule, CampaignModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
