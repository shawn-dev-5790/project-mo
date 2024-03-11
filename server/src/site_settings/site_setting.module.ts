import { Module } from '@nestjs/common'
import { SiteSettingController } from './site_setting.controller'
import { SiteSettingService } from './site_setting.service'
import { SiteSettingFactory } from './site_setting.factory'

@Module({
  controllers: [SiteSettingController],
  providers: [SiteSettingService, SiteSettingFactory],
})
export class SiteSettingModule {}
