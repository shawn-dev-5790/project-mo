import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiProperty } from '@nestjs/swagger';
import { Campaign, CampaignOptions } from './dto/campaign.dto';

export class CreateCampaignComponentReq {
  @ApiProperty({
    example: {
      id: 'AD+SF1AE%@#A2D5AF',
      channelId: 'email',
      title: 'title',
      desc: 'desc',
      stat: null,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
    },
  })
  campaign: Campaign;
  @ApiProperty()
  options: CampaignOptions;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/campaign')
  createCampaignComponent(@Body() req: CreateCampaignComponentReq): string {
    return this.appService.createCampaign(req.campaign, req.options);
  }
}
