// event.controller.ts

import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common'
import { EventService } from './event.service'
import { EventEntity } from './event.entity'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateEventReqDto, CreateEventResDto } from './event.dto'

@ApiTags('events')
@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  @ApiOperation({ summary: 'Create event' })
  @ApiResponse({ status: 201, type: CreateEventResDto, description: 'The event has been successfully created.' })
  async createEvent(@Body() req: CreateEventReqDto): Promise<CreateEventResDto> {
    return {
      code: '0000',
      message: 'success',
      data: { event: await this.eventService.createEvent(req) },
    }
  }

  // @Put(':id')
  // async updateEvent(@Param('id') id: string, @Body() eventData: UpdateEventDTO): Promise<EventEntity | undefined> {
  //   return this.eventService.updateEvent(id, eventData)
  // }

  @Delete(':id')
  async deleteEvent(@Param('id') id: string): Promise<void> {
    return this.eventService.deleteEvent(id)
  }

  @Get()
  async findAllEvents(): Promise<EventEntity[]> {
    return this.eventService.findAllEvents()
  }

  @Get('type/:type')
  async findEventsByType(@Param('type') type: string): Promise<EventEntity[]> {
    return this.eventService.findEventsByType(type)
  }

  @Get('createdAfter/:date')
  async findEventsCreatedAfter(@Param('date') date: string): Promise<EventEntity[]> {
    return this.eventService.findEventsCreatedAfter(new Date(date))
  }

  @Get(':id')
  async getEventById(@Param('id') id: string): Promise<EventEntity | undefined> {
    return this.eventService.getEventById(id)
  }
}
