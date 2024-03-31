import { Injectable } from '@nestjs/common'
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { MemberEntity } from './member.entity'
import { SiteService } from 'src/sites/site.service'
import { SettingService } from 'src/settings/setting.service'
import { UserService } from 'src/users/user.service'
import { CreateMemberReqDto, MemberDataDto } from './member.dto'
import { omit } from 'src/_core_/util/object'

@Injectable()
export class MemberService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager,

    @InjectRepository(MemberEntity)
    private readonly memberRepository: Repository<MemberEntity>,

    private readonly siteService: SiteService,
    private readonly userService: UserService,
    private readonly settingService: SettingService,
  ) {}

  private createMemeberData(member: MemberEntity): MemberDataDto {
    return {
      member: omit(member, ['user_id', 'site_id', 'setting_id', 'user', 'site', 'setting']),
      user: omit(member.user, ['id', 'pwd', 'created_at', 'updated_at', 'deleted_at']),
      site: omit(member.site, ['id', 'created_at', 'updated_at', 'deleted_at']),
      setting: omit(member.setting, ['id', 'created_at', 'updated_at', 'deleted_at']),
    }
  }

  async find(): Promise<MemberEntity[]> {
    return this.memberRepository.find()
  }

  async findOne(id: string): Promise<MemberDataDto> {
    const member = await this.memberRepository
      .createQueryBuilder('member')
      .leftJoinAndSelect('member.site', 'site')
      .leftJoinAndSelect('member.user', 'user')
      .leftJoinAndSelect('member.setting', 'setting')
      .where('member.id = :id', { id })
      .getOne()

    return this.createMemeberData(member)
  }

  async create(req: CreateMemberReqDto): Promise<MemberDataDto> {
    const onTransaction = async () => {
      const user = await this.userService.create({
        email: req.user_email,
        pwd: req.user_pwd,
      })
      const site = await this.siteService.create({
        name: req.site_name,
        host: req.site_host,
        platform: req.site_platform,
        region: req.site_region,
      })
      const setting = await this.settingService.generate()
      const member = await this.memberRepository.save({
        user_id: user.id,
        site_id: site.id,
        setting_id: setting.id,
        type: req.member_type,
      })
      return await this.findOne(member.id)
    }

    return this.entityManager.transaction(onTransaction)
  }
}
