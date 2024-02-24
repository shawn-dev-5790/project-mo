import { Injectable } from '@nestjs/common'
import { LinkedProductOptions, LinkedProductRes } from './linked_product.dto'
import { LinkedProductFactory } from './linked_product.factory'

@Injectable()
export class LinkedProductService {
  constructor(private readonly linkedProductFactory: LinkedProductFactory) {}

  readLinkedProducts({ lang_type, length }: LinkedProductOptions): LinkedProductRes {
    return this.linkedProductFactory.generateLinkedProductRes({ lang_type, length })
  }
}
