import { Controller, Get, Post, Body, Param, NotFoundException, Query } from '@nestjs/common'
import { MemberService } from './member.service'
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateMemberReqDto, CreateMemberResDto, MembersResDto } from './member.dto'

@ApiTags('members')
@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  @ApiQuery({ name: 'size', required: false, example: 10, type: Number, description: 'size number of results.' })
  @ApiQuery({ name: 'page', required: false, example: 1, type: Number, description: 'page number of results.' })
  @ApiOperation({ summary: 'Get all members' })
  @ApiResponse({ status: 200, type: '', description: 'Get all events' })
  @ApiResponse({ status: 404, description: 'members not found' })
  async findAndCount(@Query('size') size: string, @Query('page') page: string): Promise<MembersResDto> {
    const numSize = Number(size) || 10
    const numPage = Number(page) || 1
    const { members, members_page } = await this.memberService.findAndCount({ size: numSize, page: numPage })

    if (!members) throw new NotFoundException('members not found')

    return {
      code: '0000',
      message: 'success',
      data: { members, members_page },
    }
  }

  @Get(':member_id')
  @ApiParam({ name: 'member_id', type: 'string', example: 'd2b62dab-7dc4-4455-a6b8-c902a14feac8' })
  @ApiOperation({ summary: 'Get member by id' })
  @ApiResponse({ status: 200, type: CreateMemberResDto, description: 'Get member by id' })
  @ApiResponse({ status: 404, description: 'member not found' })
  async findOne(@Param('member_id') id: string): Promise<CreateMemberResDto> {
    const member = await this.memberService.findById(id)

    if (!member) throw new NotFoundException('member not found')

    return {
      code: '0000',
      message: 'success',
      data: member,
    }
  }

  @Post()
  @ApiOperation({ summary: 'Create member' })
  @ApiResponse({ status: 201, type: CreateMemberResDto, description: 'The member has been successfully created.' })
  async create(@Body() body: CreateMemberReqDto): Promise<CreateMemberResDto> {
    const member = await this.memberService.create(body)

    if (!member) throw new NotFoundException('member not found')

    return {
      code: '0000',
      message: 'success',
      data: member,
    }
  }
}
