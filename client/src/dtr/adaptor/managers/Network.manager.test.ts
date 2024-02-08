import { test, describe, expect } from 'vitest'
import { reqGetUser } from '../endpoints/getUser'

/**
 * NetworkManager에 대한 테스트 스위트입니다.
 */
describe('NetworkManager', () => {
  /**
   * axios 인스턴스를 사용하여 요청을 생성하는지 테스트합니다.
   */
  test('creates a request using axios instance', async () => {
    // getUser 요청을 실행하고 응답을 받습니다.
    const res = await reqGetUser({ path: { userId: 2 } })

    // 응답 데이터가 예상한 값과 일치하는지 확인합니다.
    expect(res.data).toEqual({
      data: {
        id: 2,
        email: 'janet.weaver@reqres.in',
        first_name: 'Janet',
        last_name: 'Weaver',
        avatar: 'https://reqres.in/img/faces/2-image.jpg',
      },
      support: {
        url: 'https://reqres.in/#support-heading',
        text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
      },
    })
  })
})
