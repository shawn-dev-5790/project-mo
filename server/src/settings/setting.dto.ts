import { ApiProperty, OmitType } from '@nestjs/swagger'
import { SettingEntity } from './setting.entity'

export class SettingDto extends OmitType(SettingEntity, ['id', 'created_at', 'updated_at', 'deleted_at']) {
  @ApiProperty({ example: false })
  is_site_meta_done: SettingEntity['is_site_meta_done']

  @ApiProperty({ example: false })
  is_site_script_done: SettingEntity['is_site_script_done']

  @ApiProperty({ example: false })
  is_site_user_done: SettingEntity['is_site_user_done']

  @ApiProperty({ example: false })
  is_site_all_done: SettingEntity['is_site_all_done']

  @ApiProperty({ example: false })
  is_kakao_app_installed: SettingEntity['is_kakao_app_installed']

  @ApiProperty({ example: false })
  is_kakao_channel_added: SettingEntity['is_kakao_channel_added']

  @ApiProperty({ example: false })
  is_kakao_all_done: SettingEntity['is_kakao_all_done']

  @ApiProperty({ example: false })
  is_email_spf_done: SettingEntity['is_email_spf_done']

  @ApiProperty({ example: false })
  is_email_dkim_done: SettingEntity['is_email_dkim_done']

  @ApiProperty({ example: false })
  is_email_header_done: SettingEntity['is_email_header_done']

  @ApiProperty({ example: false })
  is_email_footer_done: SettingEntity['is_email_footer_done']

  @ApiProperty({ example: false })
  is_email_senders_done: SettingEntity['is_email_senders_done']

  @ApiProperty({ example: false })
  is_email_all_done: SettingEntity['is_email_all_done']
}
