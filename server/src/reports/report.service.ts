import { Injectable } from '@nestjs/common'
import { ReportFactory } from './report.factory'

@Injectable()
export class ReportService {
  constructor(private readonly reportFactory: ReportFactory) {}

  generate() {
    return this.reportFactory.generate()
  }
}
