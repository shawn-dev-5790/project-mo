import { ApiProperty } from '@nestjs/swagger'
import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm'

@Entity({ name: 'event' })
export class EventEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ApiProperty()
  @Column()
  type: string

  @ApiProperty()
  @Column()
  img: string

  @ApiProperty()
  @Column()
  name: string

  @ApiProperty()
  @Column()
  cont: string

  @ApiProperty()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date

  @ApiProperty()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date

  @ApiProperty()
  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date | null
}
