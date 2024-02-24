import { Controller, Get, Param } from '@nestjs/common'
import { ProductService } from './product.service'

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts() {
    return this.productService.readProducts()
  }

  @Get(':productId')
  getProductById(@Param('productId') productId: string) {
    return this.productService.readProductById(productId)
  }
}
