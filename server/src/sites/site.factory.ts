import { Dummy } from 'src/_core_/util/dummy/Dummy'

export class SiteFactory {
  generate() {
    return {
      id: Dummy.id(),
      name: Dummy.txt('name'),
      hostname: 'test.co.kr',
      hostname_url: 'https://www.test.co.kr',
      status: Dummy.pickOne(['SIGN-UP', 'PENDING', 'FREE TRIAL', 'ACTIVE', 'DORMANT', 'WITHDRAWN']),
      platform: Dummy.pickOne(['CAFE24', 'MAKESHOP', 'GODOMALL', 'SHOPIFY']),
      user_type: Dummy.pickOne(['VIEWER', 'ADMIN', 'OWNER']),
      created_at: Dummy.date().toDateString(),
      updated_at: Dummy.date().toDateString(),
      deleted_at: '',
    }
  }
}
