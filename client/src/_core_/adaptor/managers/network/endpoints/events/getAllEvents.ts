import { useSuspenseQuery } from '@tanstack/react-query'
import NetworkManager from '../../Network.manager'

export interface IReqGetAllEvents {
  method: 'GET'
  url: 'http://localhost:3000/events' | string
  query: {
    page: number
    size: number
  }
}
export interface IResGetAllEvents {
  code: string
  message: string
  data: {
    total: number
    size: number
    page: number
    events: Array<{
      id: string
      type: string
      name: string
      cont: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }>
  }
}
export const useGetAllEvents = ({ page, size }: IReqGetAllEvents['query']) => {
  const url = `http://localhost:3000/events?page=${page}&size=${size}`
  const queryKey = [url]
  const queryFn = () => {
    return NetworkManager.request<IReqGetAllEvents, IResGetAllEvents>({ method: 'GET', url }).then((res) => res.data)
  }

  return useSuspenseQuery({ queryKey, queryFn })
}
