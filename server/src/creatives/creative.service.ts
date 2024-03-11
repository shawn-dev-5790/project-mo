import { Injectable } from '@nestjs/common'
import { CreativeFactory } from './creative.factory'

@Injectable()
export class CreativeService {
  constructor(private readonly creativeFactory: CreativeFactory) {}

  generate() {
    return this.creativeFactory.generate()
  }
}
