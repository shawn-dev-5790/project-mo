import { fakerKO as faker } from '@faker-js/faker'

export class ScheduleFactory {
  generate() {
    return {
      id: faker.string.uuid(),
      type: faker.helpers.arrayElement(['PERIOD', 'ONE-OFF', 'PERIOD-NO-DEADLINE']),
      start_at: '11:00',
      end_at: '11:00',
      send_at: '11:00',
      default_time: '11:00',
      weekday_interval: [0, 1, 3, 4, 7],
      is_duplicated: false,
    }
  }
}
