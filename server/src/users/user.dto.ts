import { ApiProperty, OmitType } from '@nestjs/swagger'
import { UserEntity } from './user.entity'

export class UserDto extends OmitType(UserEntity, ['id', 'pwd', 'created_at', 'updated_at', 'deleted_at']) {
  @ApiProperty({ example: 'test@gmail.com' })
  email: UserEntity['email']

  @ApiProperty({ example: 'test' })
  name: UserEntity['name']

  @ApiProperty({ example: '010-1234-5678' })
  phone: UserEntity['phone']

  @ApiProperty({ example: 'http://test.co.kr/logo.png' })
  img_url: UserEntity['img_url']
}
