import { Controller, Get } from '@nestjs/common'
import { ReportService } from './report.service'

@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get('/generate')
  generate() {
    return {
      code: '0000',
      message: 'success',
      data: {
        report: this.reportService.generate(),
      },
    }
  }
}
