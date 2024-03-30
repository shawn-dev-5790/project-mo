import { Injectable } from '@nestjs/common'
import { SettingEntity } from './setting.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class SettingService {
  constructor(
    @InjectRepository(SettingEntity)
    private readonly settingRepository: Repository<SettingEntity>,
  ) {}

  async find(): Promise<SettingEntity[]> {
    return this.settingRepository.find()
  }

  async findOne(id: string): Promise<SettingEntity | undefined> {
    return this.settingRepository.findOne({ where: { id } })
  }
}
