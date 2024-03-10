import { Injectable } from '@nestjs/common'
import { SiteFactory } from './site.factory'

@Injectable()
export class SiteService {
  constructor(private readonly siteFactory: SiteFactory) {}

  generate() {
    return this.siteFactory.generate()
  }
}
