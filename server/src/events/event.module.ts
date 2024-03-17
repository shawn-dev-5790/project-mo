import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EventController } from './event.controller'
import { EventRepository } from './event.repository'
import { EventService } from './event.service'
import { EventEntity } from './event.entity'

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity, EventRepository])],
  controllers: [EventController],
  providers: [EventService],
  exports: [EventService],
})
export class EventModule {}
