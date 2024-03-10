import { Module } from '@nestjs/common'
import { StatController } from './stat.controller'
import { StatService } from './stat.service'
import { StatFactory } from './stat.factory'

@Module({
  controllers: [StatController],
  providers: [StatService, StatFactory],
})
export class StatModule {}
