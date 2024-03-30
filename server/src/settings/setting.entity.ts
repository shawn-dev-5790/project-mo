import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm'

@Entity({ name: 'setting' })
export class SettingEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  is_site_meta_done: boolean

  @Column()
  is_site_script_done: boolean

  @Column()
  is_site_user_done: boolean

  @Column()
  is_site_all_done: boolean

  @Column()
  is_kakao_app_installed: boolean

  @Column()
  is_kakao_channel_added: boolean

  @Column()
  is_kakao_all_done: boolean

  @Column()
  is_email_spf_done: boolean

  @Column()
  is_email_dkim_done: boolean

  @Column()
  is_email_header_done: boolean

  @Column()
  is_email_footer_done: boolean

  @Column()
  is_email_senders_done: boolean

  @Column()
  is_email_all_done: boolean

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date | null
}
