import { Module } from '@nestjs/common'
import { ReportFactory } from './report.factory'
import { ReportService } from './report.service'
import { ReportController } from './report.controller'

@Module({
  controllers: [ReportController],
  providers: [ReportService, ReportFactory],
})
export class ReportModule {}
