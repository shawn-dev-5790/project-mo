import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SettingEntity } from './setting.entity'
import { SettingRepository } from './setting.repository'

@Module({
  imports: [TypeOrmModule.forFeature([SettingEntity, SettingRepository])],
  controllers: [],
  providers: [SettingEntity],
  exports: [SettingEntity],
})
export class SettingModule {}
