import { fakerKO as faker } from '@faker-js/faker'

export class CreativeFactory {
  generate() {
    return {
      id: faker.string.uuid(),
      type: faker.helpers.arrayElement(['AUTO', 'CUSTOM']),
      name: faker.lorem.sentence(),
      desc: faker.lorem.sentence(),
      created_at: faker.date.past().toISOString(),
      updated_at: '',
      deleted_at: '',
    }
  }
}
