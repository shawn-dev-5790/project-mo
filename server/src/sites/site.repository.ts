import { Repository } from 'typeorm'
import { SiteEntity } from './site.entity'

export class SiteRepository extends Repository<SiteEntity> {
  async findAllEvents(): Promise<SiteEntity[]> {
    return this.find()
  }

  async findEventById(id: string): Promise<SiteEntity | undefined> {
    return this.findOne({ where: { id } })
  }
}
