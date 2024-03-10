import { Module } from '@nestjs/common'
import { EventController } from './event.controller'
import { EventService } from './event.service'
import { EventFactory } from './event.factory'

@Module({
  controllers: [EventController],
  providers: [EventService, EventFactory],
})
export class EventModule {}
