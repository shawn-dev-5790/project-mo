import { ApiProperty, OmitType } from '@nestjs/swagger'
import { SiteEntity } from './site.entity'

export class SiteDto extends OmitType(SiteEntity, ['id', 'created_at', 'updated_at', 'deleted_at']) {
  @ApiProperty({ example: 'SHOPIFY' })
  platform: SiteEntity['platform']

  @ApiProperty({ example: 'KOREA' })
  region: SiteEntity['region']

  @ApiProperty({ example: 'CLOTHING' })
  category: SiteEntity['category']

  @ApiProperty({ example: 'PENDING' })
  status: SiteEntity['status']

  @ApiProperty({ example: 'testsite' })
  name: SiteEntity['name']

  @ApiProperty({ example: 'http://test.co.kr' })
  host: SiteEntity['host']

  @ApiProperty({ example: 'http://test.co.kr/logo.png' })
  logo_url: SiteEntity['logo_url']
}
