import { Module } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductController } from './product.controller'
import { ProductFactory } from './product.factory'

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductFactory],
})
export class ProductModule {}
