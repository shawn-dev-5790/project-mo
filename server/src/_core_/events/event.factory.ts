import { EventEntity } from './event.entity'

export class EventFactory {
  generateEvent(): EventEntity {
    return {
      id: '',
      type: 'WEATHER',
      img: '#',
      name: 'name',
      cont: 'cont',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    }
  }
  generateEvents(count: number): EventEntity[] {
    return Array.from({ length: count }, () => this.generateEvent())
  }
}
