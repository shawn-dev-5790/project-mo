import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EventController } from './event.controller'
import { EventRepository } from './event.repository'
import { EventService } from './event.service'
import { EventEntity } from './event.entity'
import { EventFactory } from './event.factory'

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity, EventRepository])],
  controllers: [EventController],
  providers: [EventService, EventFactory],
  exports: [EventService],
})
export class EventModule {}
