import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SettingEntity } from './setting.entity'
import { SettingRepository } from './setting.repository'
import { SettingService } from './setting.service'

@Module({
  imports: [TypeOrmModule.forFeature([SettingEntity, SettingRepository])],
  controllers: [],
  providers: [SettingService],
  exports: [SettingService],
})
export class SettingModule {}
