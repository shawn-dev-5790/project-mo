import { fakerKO as faker } from '@faker-js/faker'

export class StatFactory {
  generate() {
    return {
      id: faker.string.uuid(),
      goal_type: faker.helpers.arrayElement(['VIEW_CNT', 'VISIT_CNT', 'CVR']),
      goal_unit: faker.helpers.arrayElement(['KRW', 'JPY', 'USD']),
      goal_value: String(faker.number.float({ min: 10, max: 100, precision: 0.001 })),
    }
  }
}
