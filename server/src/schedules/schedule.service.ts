import { Injectable } from '@nestjs/common'
import { ScheduleFactory } from './schedule.factory'

@Injectable()
export class ScheduleService {
  constructor(private readonly scheduleFactory: ScheduleFactory) {}

  generate() {
    return this.scheduleFactory.generate()
  }
}
