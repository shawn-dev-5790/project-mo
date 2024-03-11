import { fakerKO as faker } from '@faker-js/faker'
import { SiteCampaignRes } from './site_campaign.dto'

export class SiteCampaignFactory {
  generate(
    event: SiteCampaignRes['data']['event'],
    site: SiteCampaignRes['data']['site'],
    campaign: SiteCampaignRes['data']['campaign'],
    stat: SiteCampaignRes['data']['stat'],
    report: SiteCampaignRes['data']['report'],
    schedule: SiteCampaignRes['data']['schedule'],
    audience: SiteCampaignRes['data']['audience'],
  ) {
    return {
      event,
      site,
      campaign,
      stat,
      report,
      schedule,
      audience,
      setting: {
        card: true,
        email: true,
        lms: true,
        firendtalk: true,
        alimtalk: true,
        banner: true,
        site: true,
        user: true,
      },
      creatives: [
        {
          id: faker.string.uuid(),
          type: faker.helpers.arrayElement(['AUTO', 'CUSTOM']),
          name: faker.lorem.sentence(),
          desc: faker.lorem.sentence(),
          created_at: faker.date.past().toISOString(),
          updated_at: '',
          deleted_at: '',
        },
      ],
    }
  }
}
