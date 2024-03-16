import { Injectable } from '@nestjs/common'
import { EventFactory } from './event.factory'

@Injectable()
export class EventService {
  constructor(private readonly eventFactory: EventFactory) {}

  generate() {
    return this.eventFactory.generate()
  }

  generateMany(size: number, page: number, lang: string) {
    return this.eventFactory.generateMany(size, page, lang)
  }
}
