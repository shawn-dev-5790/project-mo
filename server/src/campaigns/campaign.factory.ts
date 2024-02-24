import { Campaign, CampaignOptions } from 'src/campaigns/campaign.dto'

export const CampaignFactory = (campaign: Campaign, options: CampaignOptions) => {
  return JSON.stringify({
    code: '0000',
    message: 'SUCCESS',
    data: {
      campaign,
      options,
    },
  })
}
