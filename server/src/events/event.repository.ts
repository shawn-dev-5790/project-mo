import { Repository } from 'typeorm'
import { EventEntity } from './event.entity'
import { CreateEventReqDto } from './event.dto'

export class EventRepository extends Repository<EventEntity> {
  async createEvent(dto: CreateEventReqDto): Promise<EventEntity> {
    const event = this.create(dto)
    return this.save(event)
  }

  // async updateEvent(id: string, eventData: UpdateEventDTO): Promise<EventEntity | undefined> {
  //   const event = await this.findOne({ where: { id } })
  //   if (!event) return undefined
  //   return this.save({ ...event, ...eventData })
  // }

  async deleteEvent(id: string): Promise<void> {
    await this.softDelete(id)
  }

  async findEventById(id: string): Promise<EventEntity | undefined> {
    return this.findOne({ where: { id } })
  }

  async findAllEvents(): Promise<EventEntity[]> {
    return this.find()
  }

  async findEventsByType(type: string): Promise<EventEntity[]> {
    return this.find({ where: { type } })
  }

  async findEventsCreatedAfter(date: Date): Promise<EventEntity[]> {
    return this.createQueryBuilder('event').where('event.created_at > :date', { date }).getMany()
  }
}
