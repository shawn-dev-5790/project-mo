import { Injectable } from '@nestjs/common'

@Injectable()
export class ProductService {
  readProducts(): string[] {
    return ['products']
  }
  readProductById(id: string): string {
    return 'products' + id
  }
  createProduct(): string {
    return 'create product'
  }
  updateProduct(): string {
    return 'update product'
  }
  deleteProduct(): string {
    return 'delete product'
  }
}
