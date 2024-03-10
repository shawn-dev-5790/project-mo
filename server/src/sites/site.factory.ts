import { fakerKO as faker } from '@faker-js/faker'

export class SiteFactory {
  generate() {
    return {
      id: faker.string.uuid(),
      name: faker.lorem.sentence(),
      hostname: 'test.co.kr',
      hostname_url: 'https://www.test.co.kr',
      status: faker.helpers.arrayElement(['SIGN-UP', 'PENDING', 'FREE TRIAL', 'ACTIVE', 'DORMANT', 'WITHDRAWN']),
      platform: faker.helpers.arrayElement(['CAFE24', 'MAKESHOP', 'GODOMALL', 'SHOPIFY']),
      user_type: faker.helpers.arrayElement(['VIEWER', 'ADMIN', 'OWNER']),
      created_at: faker.date.past().toISOString(),
      updated_at: '',
      deleted_at: '',
    }
  }
}
