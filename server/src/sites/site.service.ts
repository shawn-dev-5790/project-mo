import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { SiteEntity } from './site.entity'

@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(SiteEntity)
    private readonly siteRepository: Repository<SiteEntity>,
  ) {}

  async find(): Promise<SiteEntity[]> {
    return this.siteRepository.find()
  }

  async findOne(id: string): Promise<SiteEntity | undefined> {
    return this.siteRepository.findOne({ where: { id } })
  }
}
