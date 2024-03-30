import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SiteEntity } from './site.entity'
import { SiteRepository } from './site.repository'
import { SiteService } from './site.service'

@Module({
  imports: [TypeOrmModule.forFeature([SiteEntity, SiteRepository])],
  controllers: [],
  providers: [SiteService],
  exports: [SiteService],
})
export class SiteModule {}
