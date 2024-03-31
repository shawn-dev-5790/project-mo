import { ApiProperty } from '@nestjs/swagger'
import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm'

@Entity({ name: 'setting' })
export class SettingEntity {
  @ApiProperty({ example: '1234-5678-1234-5678', description: 'Unique identifier' })
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ApiProperty({ default: false, example: false })
  @Column({ default: false })
  is_site_meta_done: boolean

  @ApiProperty({ default: false, example: false })
  @Column({ default: false })
  is_site_script_done: boolean

  @ApiProperty({ default: false, example: false })
  @Column({ default: false })
  is_site_user_done: boolean

  @ApiProperty({ default: false, example: false })
  @Column({ default: false })
  is_site_all_done: boolean

  @ApiProperty({ default: false, example: false })
  @Column({ default: false })
  is_kakao_app_installed: boolean

  @ApiProperty({ default: false, example: false })
  @Column({ default: false })
  is_kakao_channel_added: boolean

  @ApiProperty({ default: false, example: false })
  @Column({ default: false })
  is_kakao_all_done: boolean

  @ApiProperty({ default: false, example: false })
  @Column({ default: false })
  is_email_spf_done: boolean

  @ApiProperty({ default: false, example: false })
  @Column({ default: false })
  is_email_dkim_done: boolean

  @ApiProperty({ default: false, example: false })
  @Column({ default: false })
  is_email_header_done: boolean

  @ApiProperty({ default: false, example: false })
  @Column({ default: false })
  is_email_footer_done: boolean

  @ApiProperty({ default: false, example: false })
  @Column({ default: false })
  is_email_senders_done: boolean

  @ApiProperty({ default: false, example: false })
  @Column({ default: false })
  is_email_all_done: boolean

  @ApiProperty({ example: '2021-08-08T00:00:00.000Z', description: 'Created date' })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date

  @ApiProperty({ example: '2021-08-08T00:00:00.000Z', description: 'Updated date' })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date

  @ApiProperty({ default: null, nullable: true, example: '2021-08-08T00:00:00.000Z', description: 'Deleted date' })
  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date | null
}
