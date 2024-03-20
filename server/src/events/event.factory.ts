import { fakerEN as faker } from '@faker-js/faker'
import { EventEntity } from './event.entity'

export class EventFactory {
  generateEvent(): EventEntity {
    return {
      id: faker.string.uuid(),
      type: faker.helpers.arrayElement(['WEATHER', 'NEWS', 'HOILYDAY']),
      name: faker.lorem.sentence(),
      cont: faker.lorem.sentence(),
      created_at: faker.date.past(),
      updated_at: faker.date.past(),
      deleted_at: null,
    }
  }
  generateEvents(count: number): EventEntity[] {
    return Array.from({ length: count }, () => this.generateEvent())
  }
}
