import { Injectable } from '@nestjs/common'
import { ProductFactory } from './product.factory'
import { ProductOptions, ProductRes, ProductsRes } from './product.dto'

@Injectable()
export class ProductService {
  constructor(private readonly productFactory: ProductFactory) {}

  readProducts({ lang_type, length }: ProductOptions): ProductsRes {
    return this.productFactory.generateProductsRes({ lang_type, length })
  }
  readProductById(id: string, { lang_type, length }: ProductOptions): ProductRes {
    return this.productFactory.generateProductRes(id, { lang_type, length })
  }
}
