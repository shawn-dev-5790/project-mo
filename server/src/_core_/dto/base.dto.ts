import { ApiProperty } from '@nestjs/swagger'

export class BaseResDto {
  @ApiProperty({ example: '0000' })
  code: string

  @ApiProperty({ example: 'success' })
  message: string
}
export class BasePageDto {
  @ApiProperty({ example: 0 })
  total: number

  @ApiProperty({ example: 10 })
  size: number

  @ApiProperty({ example: 1 })
  page: number
}
