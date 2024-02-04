import { useSuspenseQuery } from '@tanstack/react-query'
import NetworkManager from '../Network.manager'

export const reqGetUser = (props: Omit<IReqGetUser, 'method' | 'url'>) => {
  return NetworkManager.request<IReqGetUser, IResGetUser>({
    method: 'GET',
    url: `https://reqres.in/api/users/${props.path.userId}`,
  })
}

export const useReadUser = (props: Omit<IReqGetUser, 'method' | 'url'>) => {
  return useSuspenseQuery({
    queryKey: [`https://reqres.in/api/users/${props.path.userId}`],
    queryFn: () =>
      reqGetUser(props)
        .then((res) => res.data)
        .then((res) => NetworkManager.sleep<IResGetUser>(2000, res)),
  })
}

export interface IReqGetUser {
  method: 'GET'
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
