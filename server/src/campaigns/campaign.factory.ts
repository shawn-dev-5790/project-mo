import { faker } from '@faker-js/faker'

export class CampaignFactory {
  generate() {
    return {
      id: faker.string.uuid(),
      name: faker.lorem.sentence(),
      desc: faker.lorem.sentence(),
      status: faker.helpers.arrayElement(['WEATHER', 'NEWS', 'HOILYDAY']),
      channel_type: faker.helpers.arrayElement(['ON', 'OFF', 'DRAFT', 'READY', 'REMOVED']),
      campaign_type: faker.helpers.arrayElement(['AUTO', 'CUSTOM']),
      created_at: faker.date.past().toISOString(),
      updated_at: '',
      deleted_at: '',
    }
  }
}
