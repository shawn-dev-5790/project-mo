import { useSuspenseQuery } from '@tanstack/react-query'
import NetworkManager from '../Network.manager'
import { sleep } from '../../../../util/sleep'

export interface IReqGetEvents {
  method: 'GET'
  url: 'http://localhost:3000/events/getnrateMany' | string
  query: {
    page: number
    size: number
    lang: string
  }
}
export interface IResGetEvents {
  code: string
  message: string
  data: {
    events: Array<{
      id: string
      type: string
      name: string
      cont: string
      created_at: string
      updated_at: string
      deleted_at: string
    }>
    events_page: {
      total: number
      size: number
      page: number
    }
  }
}
export const useGetEvents = (props: Omit<IReqGetEvents, 'method' | 'url'>) => {
  const url = `http://localhost:3000/events/getnrateMany?page=${props.query.page}&size=${props.query.size}&lang=${props.query.lang}`
  const queryKey = [url]
  const queryFn = () =>
    NetworkManager.request<IReqGetEvents, IResGetEvents>({ method: 'GET', url })
      .then((res) => res.data)
      .then((res) => sleep<IResGetEvents>(1000, res))

  return useSuspenseQuery({ queryKey, queryFn })
}
