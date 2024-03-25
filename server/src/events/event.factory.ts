import { Dummy } from 'src/_core_/util/dummy/Dummy'
import { EventEntity } from './event.entity'

export class EventFactory {
  generateEvent(): EventEntity {
    return {
      id: Dummy.id(),
      type: Dummy.pickOne(['WEATHER', 'NEWS', 'HOLIDAY', 'SPORTS', 'MUSIC', 'MOVIE', 'TVSHOW', 'GAME', 'OTHER']),
      img: Dummy.img(),
      name: Dummy.txt('name'),
      cont: Dummy.txt('cont'),
      created_at: Dummy.date(),
      updated_at: Dummy.date(),
      deleted_at: null,
    }
  }
  generateEvents(count: number): EventEntity[] {
    return Array.from({ length: count }, () => this.generateEvent())
  }
}
