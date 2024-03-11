import { Module } from '@nestjs/common'
import { AudienceController } from './audience.controller'
import { AudienceService } from './audience.service'
import { AudienceFactory } from './audience.factory'

@Module({
  controllers: [AudienceController],
  providers: [AudienceService, AudienceFactory],
})
export class AudienceModule {}
