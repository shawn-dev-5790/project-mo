import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, BeforeInsert } from 'typeorm'
import * as bcrypt from 'bcrypt'

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  email: string

  @Column()
  pwd: string

  @Column({ nullable: true })
  name: string | null

  @Column({ nullable: true })
  phone: string | null

  @Column({ nullable: true })
  img_url: string | null

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date | null

  @BeforeInsert()
  async hashPassword() {
    this.pwd = await bcrypt.hash(this.pwd, 10)
  }
}
