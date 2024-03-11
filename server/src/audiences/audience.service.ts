import { Injectable } from '@nestjs/common'
import { AudienceFactory } from './audience.factory'

@Injectable()
export class AudienceService {
  constructor(private readonly audienceFactory: AudienceFactory) {}

  generate() {
    return this.audienceFactory.generate()
  }
}
