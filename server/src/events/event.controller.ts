// event.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common'
import { EventService } from './event.service'
import { EventEntity } from './event.entity'
import { CreateEventDTO, UpdateEventDTO } from './event.dto'

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

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
    const parsedDate = new Date(date)
    return this.eventService.findEventsCreatedAfter(parsedDate)
  }

  @Get(':id')
  async getEventById(@Param('id') id: string): Promise<EventEntity | undefined> {
    return this.eventService.getEventById(id)
  }

  @Put(':id')
  async updateEvent(@Param('id') id: string, @Body() eventData: UpdateEventDTO): Promise<EventEntity | undefined> {
    return this.eventService.updateEvent(id, eventData)
  }

  @Delete(':id')
  async deleteEvent(@Param('id') id: string): Promise<void> {
    return this.eventService.deleteEvent(id)
  }

  @Post()
  async createEvent(@Body() eventData: CreateEventDTO): Promise<EventEntity> {
    return this.eventService.createEvent(eventData)
  }
}
