import { Controller, Get, Query } from '@nestjs/common'
import { LinkedProductService } from './linked_product.service'
import { LinkedProductOptions } from './linked_product.dto'

@Controller('linked-products')
export class LinkedProductController {
  constructor(private readonly linkedProductService: LinkedProductService) {}

  @Get()
  getProducts(
    @Query('lang') lang_type: LinkedProductOptions['lang_type'],
    @Query('size') length: LinkedProductOptions['length'],
  ) {
    return this.linkedProductService.readLinkedProducts({ lang_type, length })
  }
}
