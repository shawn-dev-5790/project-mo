import { Injectable } from '@nestjs/common'
import { ProductFactory } from './product.factory'
import { ProductOptions, ProductsRes } from './product.dto'

@Injectable()
export class ProductService {
  constructor(private readonly productFactory: ProductFactory) {}

  readProducts({ lang_type, length }: ProductOptions): ProductsRes {
    return this.productFactory.generateProductRes({ lang_type, length })
  }
}
