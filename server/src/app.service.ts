import { Injectable } from '@nestjs/common';
import { Campaign, CampaignOptions } from './dto/campaign.dto';
import { CampaignFactory } from './component.factories/campaign.fac';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  createCampaign(campaign: Campaign, options: CampaignOptions): string {
    return CampaignFactory(campaign, options);
  }
}
