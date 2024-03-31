import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, BeforeInsert } from 'typeorm'
import * as bcrypt from 'bcrypt'
import { ApiProperty } from '@nestjs/swagger'

@Entity({ name: 'user' })
export class UserEntity {
  @ApiProperty({ example: '1234-5678-1234-5678', description: 'Unique identifier' })
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ApiProperty({ example: 'test@test.com', description: 'Email' })
  @Column()
  email: string

  @ApiProperty({ example: '***', description: 'Password' })
  @Column()
  pwd: string

  @ApiProperty({ default: null, nullable: true, example: 'test', description: 'Name' })
  @Column({ nullable: true })
  name: string | null

  @ApiProperty({ default: null, nullable: true, example: '+82 010-1234-5678', description: 'Phone' })
  @Column({ nullable: true })
  phone: string | null

  @ApiProperty({ default: null, nullable: true, example: 'http://test.co.kr/logo.png', description: 'Image URL' })
  @Column({ nullable: true })
  img_url: string | null

  @ApiProperty({ example: '2021-08-08T00:00:00.000Z', description: 'Created date' })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date

  @ApiProperty({ example: '2021-08-08T00:00:00.000Z', description: 'Updated date' })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date

  @ApiProperty({ default: null, nullable: true, example: '2021-08-08T00:00:00.000Z', description: 'Deleted date' })
  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date | null

  @BeforeInsert()
  async hashPassword() {
    this.pwd = await bcrypt.hash(this.pwd, 10)
  }
}
