import { ApiProperty } from '@nestjs/swagger'
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
  @ApiProperty({ example: '1234-5678-1234-5678', description: 'Unique identifier' })
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ApiProperty({
    enum: EMemberType,
    default: EMemberType.VIEWER,
    example: 'VIEWER',
    description: 'Member type',
  })
  @Column({
    type: 'enum',
    enum: EMemberType,
    default: EMemberType.VIEWER,
  })
  type: EMemberType

  @ApiProperty({ example: '1234-5678-1234-5678', description: 'Site identifier' })
  @Column()
  site_id: string

  @ApiProperty({ example: '1234-5678-1234-5678', description: 'User identifier' })
  @Column()
  user_id: string

  @ApiProperty({ example: '1234-5678-1234-5678', description: 'Setting identifier' })
  @Column()
  setting_id: string

  @ApiProperty({ example: '2021-08-08T00:00:00.000Z', description: 'Created date' })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date

  @ApiProperty({ example: '2021-08-08T00:00:00.000Z', description: 'Updated date' })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date

  @ApiProperty({ default: null, nullable: true, example: '2021-08-08T00:00:00.000Z', description: 'Deleted date' })
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
