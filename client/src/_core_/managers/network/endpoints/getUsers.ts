import { useSuspenseQuery } from '@tanstack/react-query'
import { sleep } from '../../../util/sleep'
import NetworkManager from '../Network.manager'

export interface IReqGetUserList {
  method: 'GET'
  url: 'https://reqres.in/api/users/?page=1' | string
  query: {
    page: number
  }
}

export interface IResGetUserList {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: Array<{
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
  }>
  support: {
    url: string
    text: string
  }
}

export const reqGetUsers = (props: Omit<IReqGetUserList, 'method' | 'url'>) => {
  return NetworkManager.request<IReqGetUserList, IResGetUserList>({
    method: 'GET',
    url: `https://reqres.in/api/users/?page=${props.query.page}`,
  })
}

export const useReadUsers = (props: Omit<IReqGetUserList, 'method' | 'url'>) => {
  return useSuspenseQuery({
    queryKey: [`https://reqres.in/api/users/?page=${props.query.page}`],
    queryFn: () =>
      reqGetUsers(props)
        .then((res) => res.data)
        .then((res) => sleep<IResGetUserList>(100, res)),
  })
}
