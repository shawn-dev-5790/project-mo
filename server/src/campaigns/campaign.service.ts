import { Injectable } from '@nestjs/common'
import { Campaign, CampaignOptions } from './campaign.dto'

@Injectable()
export class CampaginService {
  readCampaigns(): string[] {
    return ['Campaigns']
  }
  readCampaignById(id: string): string {
    return 'Campaigns' + id
  }
  createCampaign(campaign: Campaign, options: CampaignOptions): string {
    return JSON.stringify({
      name: 'create Campaign',
      campaign,
      options,
    })
  }
  updateCampaign(): string {
    return 'update Campaign'
  }
  deleteCampaign(): string {
    return 'delete Campaign'
  }
}
