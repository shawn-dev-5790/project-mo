import { Controller, Get, Param, Query } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductOptions } from './product.dto'

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(@Query('lang') lang_type: ProductOptions['lang_type'], @Query('size') length: ProductOptions['length']) {
    return this.productService.readProducts({ lang_type, length })
  }

  @Get(':productId')
  getProductById(
    @Param('productId') productId: string,
    @Query('lang') lang_type: ProductOptions['lang_type'],
    @Query('size') length: ProductOptions['length'],
  ) {
    return this.productService.readProductById(productId, { lang_type, length })
  }
}
