import { Injectable } from '@nestjs/common'
import { SiteSettingFactory } from './site_setting.factory'

@Injectable()
export class SiteSettingService {
  constructor(private readonly siteSettingFactory: SiteSettingFactory) {}

  generate() {
    return this.siteSettingFactory.generate()
  }
}
