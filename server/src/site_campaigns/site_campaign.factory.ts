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
  ) {
    return {
      event,
      site,
      campaign,
      stat,
      report,
      schedule,
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
      audience: {
        id: faker.string.uuid(),
        type: faker.helpers.arrayElement(['AUDIENCE-PRESET', 'CAMPAIGN-PRESET']),
        name: faker.lorem.sentence(),
        desc: faker.lorem.sentence(),
        condition: 'some condition',
        count: 0,
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
