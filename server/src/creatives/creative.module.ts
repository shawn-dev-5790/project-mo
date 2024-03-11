import { Module } from '@nestjs/common'
import { CreativeController } from './creative.controller'
import { CreativeService } from './creative.service'
import { CreativeFactory } from './creative.factory'

@Module({
  controllers: [CreativeController],
  providers: [CreativeService, CreativeFactory],
})
export class CreativeMoudle {}
