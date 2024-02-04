import { useSuspenseQuery } from '@tanstack/react-query'
import NetworkManager from '../Network.manager'

export const reqGetUserList = (props: Omit<IReqGetUserList, 'method' | 'url'>) => {
  return NetworkManager.request<IReqGetUserList, IResGetUserList>({
    method: 'GET',
    url: `https://reqres.in/api/users/?page=${props.query.page}`,
  })
}

export const useReadUserList = (props: Omit<IReqGetUserList, 'method' | 'url'>) => {
  return useSuspenseQuery({
    queryKey: [`https://reqres.in/api/users/?page=${props.query.page}`],
    queryFn: () =>
      reqGetUserList(props)
        .then((res) => res.data)
        .then((res) => NetworkManager.sleep<IResGetUserList>(1000, res)),
  })
}

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
