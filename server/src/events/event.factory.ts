import { fakerEN as faker } from '@faker-js/faker'
import { fakerEN } from '@faker-js/faker'
import { fakerJA } from '@faker-js/faker'
import { fakerKO } from '@faker-js/faker'

const dummy = (faker) =>
  Array.from({ length: 35 }, () => ({
    id: faker.string.uuid(),
    type: faker.helpers.arrayElement(['WEATHER', 'NEWS', 'HOILYDAY']),
    name: faker.lorem.sentence(),
    cont: faker.lorem.sentence(),
    created_at: faker.date.past().toISOString(),
    updated_at: '',
    deleted_at: '',
  }))

export class EventFactory {
  generateEvent() {
    return {
      id: faker.string.uuid(),
      type: faker.helpers.arrayElement(['WEATHER', 'NEWS', 'HOILYDAY']),
      name: faker.lorem.sentence(),
      cont: faker.lorem.sentence(),
      created_at: faker.date.past().toISOString(),
      updated_at: '',
      deleted_at: '',
    }
  }
  generateMany(size: number, page: number, lang: string) {
    const fakerByLocale = lang === 'en' ? fakerEN : lang === 'ja' ? fakerJA : fakerKO
    const events = dummy(fakerByLocale).slice((page - 1) * size, (page - 1) * size + size)
    const events_page = { total: dummy(faker).length, size, page }

    return {
      events,
      events_page,
    }
  }
}
