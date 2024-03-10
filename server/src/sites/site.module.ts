import { Module } from '@nestjs/common'
import { SiteController } from './site.controller'
import { SiteService } from './site.service'
import { SiteFactory } from './site.factory'

@Module({
  controllers: [SiteController],
  providers: [SiteService, SiteFactory],
})
export class SiteModule {}
