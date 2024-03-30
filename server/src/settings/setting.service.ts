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
    return await this.settingRepository.find()
  }

  async findOne(id: string): Promise<SettingEntity | undefined> {
    return await this.settingRepository.findOne({ where: { id } })
  }

  async create(setting: Partial<SettingEntity>): Promise<SettingEntity> {
    return await this.settingRepository.save(setting)
  }

  async generate(): Promise<SettingEntity> {
    const generated = new SettingEntity()
    return await this.settingRepository.save(generated)
  }
}
