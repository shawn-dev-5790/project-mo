import { Module } from '@nestjs/common'
import { ScheduleController } from './schedule.controller'
import { ScheduleFactory } from './schedule.factory'
import { ScheduleService } from './schedule.service'

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService, ScheduleFactory],
})
export class ScheduleModule {}
