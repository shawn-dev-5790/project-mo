import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm'

export enum ESiteStatus {
  PENDING = 10,
  FREE_TRIAL = 20,
  ACTIVE = 30,
  DORMANT = 40,
  WITHDRAWN = 100,
}

export enum ESiteCategory {
  CLOTHING = 1,
  FOOD = 2,
  ELECTRONICS = 3,
  FURNITURE = 4,
  TOYS = 5,
  BOOKS = 6,
}

export enum ESitePlatform {
  SHOPIFY = 'SHOPIFY',
  MAKESHOP = 'MAKESHOP',
  CAFE24 = 'CAFE24',
  GODOMALL = 'GODOMALL',
}

@Entity({ name: 'site' })
export class SiteEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    type: 'enum',
    enum: ESiteStatus,
    default: ESiteStatus.PENDING,
  })
  status: ESiteStatus

  @Column({
    type: 'enum',
    enum: ESiteCategory,
    default: ESiteCategory.CLOTHING,
  })
  category: ESiteCategory

  @Column({
    type: 'enum',
    enum: ESitePlatform,
    default: ESitePlatform.SHOPIFY,
  })
  platform: ESitePlatform

  @Column()
  phone: string

  @Column()
  name: string

  @Column()
  host: string

  @Column()
  logo_url: string

  @Column()
  region: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date | null
}
