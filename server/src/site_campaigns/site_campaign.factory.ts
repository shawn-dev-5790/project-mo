import { fakerKO as faker } from '@faker-js/faker'

export class SiteCampaignFactory {
  generate(event: any, site: any, campaign: any, stat: any, report: any) {
    return {
      event,
      site,
      campaign,
      stat,
      report,
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

      schedule: {
        id: faker.string.uuid(),
        type: faker.helpers.arrayElement(['PERIOD', 'ONE-OFF', 'PERIOD-NO-DEADLINE']),
        start_at: '11:00',
        end_at: '11:00',
        send_at: '11:00',
        default_time: '11:00',
        weekday_interval: [0, 1, 3, 4, 7],
        is_duplicated: false,
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
