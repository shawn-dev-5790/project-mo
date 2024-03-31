import { Injectable } from '@nestjs/common'
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { MemberEntity } from './member.entity'
import { SiteService } from 'src/sites/site.service'
import { SettingService } from 'src/settings/setting.service'
import { UserService } from 'src/users/user.service'
import { CreateMemberReqDto, MemberDataDto, MembersDataDto, MembersReqDto } from './member.dto'
import { omit } from 'src/_core_/util.object'

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

  async findAndCount(req: MembersReqDto): Promise<MembersDataDto> {
    const { page = 1, size = 10 } = req
    const [members, total] = await this.memberRepository.findAndCount({
      take: size,
      skip: (page - 1) * size,
    })
    return { members, members_page: { page, size, total } }
  }

  async findById(id: string): Promise<MemberDataDto> {
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
    const { user_email, user_pwd, site_name, site_host, site_platform, site_region, member_type } = req

    const onTransaction = async () => {
      const user = await this.userService.create({
        email: user_email,
        pwd: user_pwd,
      })
      const site = await this.siteService.create({
        name: site_name,
        host: site_host,
        platform: site_platform,
        region: site_region,
      })
      const setting = await this.settingService.generate()
      const member = await this.memberRepository.save({
        user_id: user.id,
        site_id: site.id,
        setting_id: setting.id,
        type: member_type,
      })
      return await this.findById(member.id)
    }

    return this.entityManager.transaction(onTransaction)
  }
}
