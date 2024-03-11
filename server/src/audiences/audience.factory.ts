import { fakerKO as faker } from '@faker-js/faker'

export class AudienceFactory {
  generate() {
    return {
      id: faker.string.uuid(),
      type: faker.helpers.arrayElement(['AUDIENCE-PRESET', 'CAMPAIGN-PRESET']),
      name: faker.lorem.sentence(),
      desc: faker.lorem.sentence(),
      condition: 'some condition',
      count: 0,
    }
  }
}
