import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class EventEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  type: string

  @Column()
  name: string

  @Column()
  cont: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date | null
}
