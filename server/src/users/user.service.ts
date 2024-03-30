import { Injectable } from '@nestjs/common'
import { UserEntity } from './user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async find(): Promise<UserEntity[]> {
    return this.userRepository.find()
  }

  async findOne(id: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({ where: { id } })
  }
}
