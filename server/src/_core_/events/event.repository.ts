import { Repository } from 'typeorm'
import { EventEntity } from './event.entity'

export class EventRepository extends Repository<EventEntity> {
  async findAllEvents(): Promise<EventEntity[]> {
    return this.find()
  }

  async findEventById(id: string): Promise<EventEntity | undefined> {
    return this.findOne({ where: { id } })
  }

  async createEvent(data: Partial<EventEntity>): Promise<EventEntity> {
    const event = this.create(data)

    return this.save(event)
  }

  async updateEvent(id: string, data: Partial<EventEntity>): Promise<EventEntity | undefined> {
    const event = await this.findOne({ where: { id } })

    if (!event) return undefined

    return this.save({ ...event, ...data })
  }

  async deleteEvent(id: string): Promise<void> {
    await this.softDelete(id)
  }
}
