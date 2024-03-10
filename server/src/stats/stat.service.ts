import { Injectable } from '@nestjs/common'
import { StatFactory } from './stat.factory'

@Injectable()
export class StatService {
  constructor(private readonly statFactory: StatFactory) {}

  generate() {
    return this.statFactory.generate()
  }
}
