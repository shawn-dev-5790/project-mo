import { Repository } from 'typeorm'
import { SettingEntity } from './setting.entity'

export class SettingRepository extends Repository<SettingEntity> {
  async findAllEvents(): Promise<SettingEntity[]> {
    return this.find()
  }

  async findEventById(id: string): Promise<SettingEntity | undefined> {
    return this.findOne({ where: { id } })
  }
}
