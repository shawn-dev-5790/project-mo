import NetworkManager from '../Network.manager'

export default function reqGetUser(userId: IReqGetUser['path']['userId']) {
  return NetworkManager.request<IReqGetUser, IResGetUser>({
    method: 'GET',
    url: `https://reqres.in/api/users/${userId}`,
  })
}

export interface IReqGetUser {
  url: 'https://reqres.in/api/users/:userId' | string
  path: {
    userId: number
  }
}

export interface IResGetUser {
  data: {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
  }
  support: {
    url: string
    text: string
  }
}
