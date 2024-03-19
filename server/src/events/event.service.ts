// event.service.ts

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MoreThan, Repository } from 'typeorm'
import { EventEntity } from './event.entity'
import { CreateEventReqDto } from './event.dto'

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepository: Repository<EventEntity>,
  ) {}

  async createEvent(dto: CreateEventReqDto): Promise<EventEntity> {
    const event = this.eventRepository.create(dto)
    return this.eventRepository.save(event)
  }

  // async updateEvent(id: string, eventData: UpdateEventDTO): Promise<EventEntity | undefined> {
  //   const event = await this.eventRepository.findOne({ where: { id } })
  //   if (!event) return undefined
  //   return this.eventRepository.save({ ...event, ...eventData })
  // }

  async deleteEvent(id: string): Promise<void> {
    await this.eventRepository.softDelete(id)
  }

  async getEventById(id: string): Promise<EventEntity | undefined> {
    return this.eventRepository.findOne({ where: { id } })
  }

  async findAllEvents(): Promise<EventEntity[]> {
    return this.eventRepository.find()
  }

  async findEventsByType(type: string): Promise<EventEntity[]> {
    return this.eventRepository.find({ where: { type } })
  }

  async findEventsCreatedAfter(date: Date): Promise<EventEntity[]> {
    return this.eventRepository.find({ where: { created_at: MoreThan(date) } })
  }
}
