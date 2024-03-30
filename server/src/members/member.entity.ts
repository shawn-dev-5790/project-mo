import { SettingEntity } from 'src/settings/setting.entity'
import { SiteEntity } from 'src/sites/site.entity'
import { UserEntity } from 'src/users/user.entity'
import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, JoinColumn, ManyToOne } from 'typeorm'

export enum EMemberType {
  VIEWER = 'VIEWER',
  ADMIN = 'ADMIN',
  OWNER = 'OWNER',
}

@Entity({ name: 'member' })
export class MemberEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    type: 'enum',
    enum: EMemberType,
    default: EMemberType.VIEWER,
  })
  type: EMemberType

  @Column()
  site_id: string

  @Column()
  user_id: string

  @Column()
  setting_id: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date | null

  @ManyToOne(() => SiteEntity)
  @JoinColumn({ name: 'site_id' })
  site: SiteEntity

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity

  @ManyToOne(() => SettingEntity)
  @JoinColumn({ name: 'setting_id' })
  setting: SettingEntity
}
