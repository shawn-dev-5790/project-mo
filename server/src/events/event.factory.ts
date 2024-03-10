import { fakerKO as faker } from '@faker-js/faker'

export class EventFactory {
  generate() {
    return {
      id: faker.string.uuid(),
      tpye: faker.helpers.arrayElement(['WEATHER', 'NEWS', 'HOILYDAY']),
      name: faker.lorem.sentence(),
      cont: faker.lorem.sentence(),
      created_at: faker.date.past().toISOString(),
      updated_at: '',
      deleted_at: '',
    }
  }
}
