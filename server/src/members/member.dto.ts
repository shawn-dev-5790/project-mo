import { SiteEntity } from 'src/sites/site.entity'
import { UserEntity } from 'src/users/user.entity'
import { MemberEntity } from './member.entity'
import { ApiProperty, OmitType } from '@nestjs/swagger'
import { UserDto } from 'src/users/user.dto'
import { SiteDto } from 'src/sites/site.dto'
import { SettingDto } from 'src/settings/setting.dto'
import { BaseResDto } from 'src/_core_/dto/base.dto'

export class MemberDto extends OmitType(MemberEntity, [
  'user_id',
  'site_id',
  'setting_id',
  'site',
  'user',
  'setting',
]) {}

export class MemberDataDto {
  member: MemberDto
  user: UserDto
  site: SiteDto
  setting: SettingDto
}

export class CreateMemberReqDto {
  @ApiProperty({ example: '1234-5678-1234-5678' })
  user_email: UserEntity['email']

  @ApiProperty({ example: '1234-5678-1234-5678' })
  user_pwd: UserEntity['pwd']

  @ApiProperty({ example: 'testsite' })
  site_name: SiteEntity['name']

  @ApiProperty({ example: 'http://test.co.kr' })
  site_host: SiteEntity['host']

  @ApiProperty({ example: 'SHOPIFY' })
  site_platform: SiteEntity['platform']

  @ApiProperty({ example: 'KOREA' })
  site_region: SiteEntity['region']

  @ApiProperty({ example: 'OWNER' })
  member_type: MemberEntity['type']
}
export class CreateMemberResDto extends BaseResDto {
  data: MemberDataDto
}
