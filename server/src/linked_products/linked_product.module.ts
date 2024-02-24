import { Module } from '@nestjs/common'
import { LinkedProductService } from './linked_product.service'
import { LinkedProductFactory } from './linked_product.factory'
import { LinkedProductController } from './linked_product.controller'

@Module({
  controllers: [LinkedProductController],
  providers: [LinkedProductService, LinkedProductFactory],
})
export class LinkedProductModule {}
