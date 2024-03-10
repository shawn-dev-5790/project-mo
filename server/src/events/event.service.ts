import { Injectable } from '@nestjs/common'
import { EventFactory } from './event.factory'

@Injectable()
export class EventService {
  constructor(private readonly eventFactory: EventFactory) {}

  generate() {
    return this.eventFactory.generate()
  }
}
