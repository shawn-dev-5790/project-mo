import { fakerKO as faker } from '@faker-js/faker'

export class ReportFactory {
  generate() {
    return {
      id: faker.string.uuid(),
      name: faker.lorem.sentence(),
      desc: faker.lorem.sentence(),
      status: faker.helpers.arrayElement(['NEW', 'READ', 'NEW-READ']),
      tags: faker.lorem.words(5).split(' '),
      created_at: faker.date.past().toISOString(),
      updated_at: '',
      deleted_at: '',
    }
  }
}
