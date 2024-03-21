import { Dummy } from 'src/_core_/util/dummy/Dummy'

export class ScheduleFactory {
  generate() {
    return {
      id: Dummy.id(),
      type: Dummy.pickOne(['PERIOD', 'ONE-OFF', 'PERIOD-NO-DEADLINE']),
      start_at: '11:00',
      end_at: '11:00',
      send_at: '11:00',
      default_time: '11:00',
      weekday_interval: [0, 1, 3, 4, 7],
      is_duplicated: false,
    }
  }
}
