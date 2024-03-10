import { Injectable } from '@nestjs/common'
import { CampaignFactory } from './campaign.factory'

@Injectable()
export class CampaginService {
  constructor(private readonly campaignFactory: CampaignFactory) {}

  generate() {
    return this.campaignFactory.generate()
  }
}
