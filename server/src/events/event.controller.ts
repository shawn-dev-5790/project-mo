// event.controller.ts

import { Controller, Get, Post, Delete, Param, Body, Query, NotFoundException, Patch } from '@nestjs/common'
import { EventService } from './event.service'
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import {
  ResEventDetailDto,
  ResEventListDto,
  EventQueryParamDto,
  BodyForCreateEventDto,
  BodyForUpdateEventDto,
} from './event.dto'

@ApiTags('events')
@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  @ApiOperation({ summary: 'Get all events' })
  @ApiResponse({ status: 200, type: ResEventListDto, description: 'Get all events' })
  @ApiQuery({ name: 'size', type: 'number', example: 10 })
  @ApiQuery({ name: 'page', type: 'number', example: 1 })
  async findAllEvents(
    @Query('page') reqPage: EventQueryParamDto['page'],
    @Query('size') reqSize: EventQueryParamDto['size'],
  ): Promise<ResEventListDto> {
    const events = await this.eventService.find()
    const total = events.length
    const page = Number(reqPage)
    const size = Number(reqSize)

    return { code: '0000', message: 'success', data: { total, page, size, events } }
  }

  @Get('generate')
  @ApiOperation({ summary: 'Generate events' })
  @ApiQuery({ name: 'size', type: 'number', example: 10 })
  async generateEvents(@Query('size') reqSize: EventQueryParamDto['size']): Promise<ResEventListDto> {
    reqSize ? await this.eventService.generateEvents(Number(reqSize)) : await this.eventService.generateEvent()
    return await this.findAllEvents(1, 10)
  }

  @Get(':event_id')
  @ApiOperation({ summary: 'Get event by id' })
  @ApiResponse({ status: 200, type: ResEventDetailDto, description: 'Get event by id' })
  @ApiResponse({ status: 404, description: 'Event not found' })
  @ApiParam({ name: 'event_id', type: 'string', example: 'b7f79334-15e1-483b-ac3a-9a1de56b88e5' })
  async getEventById(@Param('event_id') id: EventQueryParamDto['id']): Promise<ResEventDetailDto> {
    const event = await this.eventService.findOne(id)

    if (!event) throw new NotFoundException('Event not found')

    return { code: '0000', message: 'success', data: { event } }
  }

  @Post()
  @ApiOperation({ summary: 'Create event' })
  @ApiResponse({ status: 201, type: ResEventDetailDto, description: 'The event has been successfully created.' })
  async createEvent(@Body() body: BodyForCreateEventDto): Promise<ResEventDetailDto> {
    const event = await this.eventService.createEvent(body)

    return { code: '0000', message: 'success', data: { event } }
  }

  @Patch(':event_id')
  @ApiOperation({ summary: 'Update event' })
  @ApiResponse({ status: 204, type: ResEventDetailDto, description: 'The event has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Event not found' })
  @ApiParam({ name: 'event_id', type: 'string', example: 'b7f79334-15e1-483b-ac3a-9a1de56b88e5' })
  async updateEvent(
    @Param('event_id') id: EventQueryParamDto['id'],
    @Body() body: BodyForUpdateEventDto,
  ): Promise<ResEventDetailDto> {
    const event = await this.eventService.findOne(id)

    if (!event) throw new NotFoundException('Event not found')

    const eventToUpdate = await this.eventService.updateEvent(id, body)

    return { code: '0000', message: 'success', data: { event: eventToUpdate } }
  }

  @Delete(':event_id')
  @ApiOperation({ summary: 'Delete event' })
  @ApiResponse({ status: 204, type: ResEventDetailDto, description: 'The event has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Event not found' })
  @ApiParam({ name: 'event_id', type: 'string', example: 'b7f79334-15e1-483b-ac3a-9a1de56b88e5' })
  async deleteEvent(@Param('event_id') id: EventQueryParamDto['id']): Promise<ResEventDetailDto> {
    const event = await this.eventService.findOne(id)

    if (!event) throw new NotFoundException('Event not found')

    await this.eventService.deleteEvent(id)

    return { code: '0000', message: 'success', data: { event } }
  }
}
