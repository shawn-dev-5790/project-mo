import { ESitePlatform, ESiteRegion, SiteEntity } from 'src/sites/site.entity'
import { UserEntity } from 'src/users/user.entity'
import { MemberEntity } from './member.entity'
import { ApiProperty, OmitType } from '@nestjs/swagger'
import { BaseResDto } from 'src/_core_/dto/base.dto'
import { SettingEntity } from 'src/settings/setting.entity'

// ================================
// entity to dto
// ================================
class MemberDto extends OmitType(MemberEntity, ['user_id', 'site_id', 'setting_id', 'site', 'user', 'setting']) {}
class UserDto extends OmitType(UserEntity, ['id', 'pwd', 'created_at', 'updated_at', 'deleted_at']) {}
class SiteDto extends OmitType(SiteEntity, ['id', 'created_at', 'updated_at', 'deleted_at']) {}
class SettingDto extends OmitType(SettingEntity, ['id', 'created_at', 'updated_at', 'deleted_at']) {}

// ================================
// response.data
// ================================
export class MemberDataDto {
  @ApiProperty({ type: MemberDto })
  member: MemberDto

  @ApiProperty({ type: UserDto })
  user: UserDto

  @ApiProperty({ type: SiteDto })
  site: SiteDto

  @ApiProperty({ type: SettingDto })
  setting: SettingDto
}

// ================================
// response & request
// ================================
export class CreateMemberResDto extends BaseResDto {
  @ApiProperty({ type: MemberDataDto })
  data: MemberDataDto
}
export class CreateMemberReqDto {
  @ApiProperty({ example: 'OWNER' })
  member_type: MemberEntity['type']

  @ApiProperty({ example: 'test@test.com', description: 'Email' })
  user_email: string

  @ApiProperty({ example: '***', description: 'Password' })
  user_pwd: string

  @ApiProperty({ example: 'testsite', description: 'Site name' })
  site_name: string

  @ApiProperty({ example: 'http://test.co.kr', description: 'Site host' })
  site_host: string

  @ApiProperty({
    enum: ESitePlatform,
    default: ESitePlatform.SHOPIFY,
    example: 'SHOPIFY',
    description: 'Site platform',
  })
  site_platform: ESitePlatform

  @ApiProperty({
    enum: ESiteRegion,
    default: ESiteRegion.KOREA,
    example: 'KOREA',
    description: 'Site region',
  })
  site_region: ESiteRegion
}
