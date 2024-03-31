import { ApiProperty } from '@nestjs/swagger'
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

export enum ESiteRegion {
  KOREA = 'KOREA',
  USA = 'USA',
  CHINA = 'CHINA',
  JAPAN = 'JAPAN',
  GERMANY = 'GERMANY',
}

@Entity({ name: 'site' })
export class SiteEntity {
  @ApiProperty({ example: '1234-5678-1234-5678', description: 'Unique identifier' })
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ApiProperty({
    enum: ESiteStatus,
    default: ESiteStatus.PENDING,
    example: 'PENDING',
    description: 'Site status',
  })
  @Column({
    type: 'enum',
    enum: ESiteStatus,
    default: ESiteStatus.PENDING,
  })
  status: ESiteStatus

  @ApiProperty({
    enum: ESiteCategory,
    default: ESiteCategory.CLOTHING,
    example: 'CLOTHING',
    description: 'Site category',
  })
  @Column({
    type: 'enum',
    enum: ESiteCategory,
    default: ESiteCategory.CLOTHING,
  })
  category: ESiteCategory

  @ApiProperty({
    enum: ESitePlatform,
    default: ESitePlatform.SHOPIFY,
    example: 'SHOPIFY',
    description: 'Site platform',
  })
  @Column({
    type: 'enum',
    enum: ESitePlatform,
    default: ESitePlatform.SHOPIFY,
  })
  platform: ESitePlatform

  @ApiProperty({
    enum: ESiteRegion,
    default: ESiteRegion.KOREA,
    example: 'KOREA',
    description: 'Site region',
  })
  @Column({
    type: 'enum',
    enum: ESiteRegion,
    default: ESiteRegion.KOREA,
  })
  region: ESiteRegion

  @ApiProperty({ example: 'testsite', description: 'Site name' })
  @Column()
  name: string

  @ApiProperty({ example: 'http://test.co.kr', description: 'Site host' })
  @Column()
  host: string

  @ApiProperty({ default: null, nullable: true, example: 'http://test.co.kr/logo.png', description: 'Site logo URL' })
  @Column({ nullable: true })
  logo_url: string | null

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
