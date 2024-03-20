// event.service.ts

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { EventEntity } from './event.entity'
import { EventFactory } from './event.factory'

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepository: Repository<EventEntity>,
    private readonly eventFactory: EventFactory,
  ) {}

  async findAllEvents(): Promise<EventEntity[]> {
    return this.eventRepository.find()
  }

  async getEventById(id: string): Promise<EventEntity | undefined> {
    return this.eventRepository.findOne({ where: { id } })
  }

  async createEvent(data: Partial<EventEntity>): Promise<EventEntity> {
    const event = this.eventRepository.create(data)

    return this.eventRepository.save(event)
  }

  async updateEvent(id: string, eventData: Partial<EventEntity>): Promise<EventEntity | undefined> {
    const event = await this.eventRepository.findOne({ where: { id } })

    if (!event) return undefined

    return this.eventRepository.save({ ...event, ...eventData })
  }

  async deleteEvent(id: string): Promise<void> {
    await this.eventRepository.softDelete(id)
  }

  async generateEvent(): Promise<void> {
    await this.createEvent(this.eventFactory.generateEvent())
  }

  async generateEvents(length: number): Promise<void> {
    this.eventFactory.generateEvents(length).map(async (event) => {
      await this.createEvent(event)
    })
  }
}
