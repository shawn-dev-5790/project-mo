import { Repository } from 'typeorm'
import { UserEntity } from './user.entity'

export class UserRepository extends Repository<UserEntity> {
  async findAllEvents(): Promise<UserEntity[]> {
    return this.find()
  }

  async findEventById(id: string): Promise<UserEntity | undefined> {
    return this.findOne({ where: { id } })
  }
}
