import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MemberEntity } from './member.entity'
import { MemberRepository } from './member.repository'
import { MemberService } from './member.service'
import { MemberController } from './member.controller'
import { SiteService } from 'src/sites/site.service'
import { UserService } from 'src/users/user.service'
import { SettingService } from 'src/settings/setting.service'
import { SiteEntity } from 'src/sites/site.entity'
import { UserEntity } from 'src/users/user.entity'
import { SettingEntity } from 'src/settings/setting.entity'

@Module({
  imports: [TypeOrmModule.forFeature([MemberEntity, MemberRepository, SiteEntity, UserEntity, SettingEntity])],
  controllers: [MemberController],
  providers: [MemberService, SiteService, UserService, SettingService],
  exports: [MemberService],
})
export class MemberModule {}
