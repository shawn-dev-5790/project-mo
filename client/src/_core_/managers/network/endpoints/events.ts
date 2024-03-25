import { useMutation, useSuspenseQuery } from '@tanstack/react-query'
import NetworkManager from '../Network.manager'

interface IEvent {
  id: string
  type: string
  name: string
  cont: string
  created_at: Date
  updated_at: Date
  deleted_at: Date | null
}

export interface IReqGetAllEvents {
  method: 'GET'
  url: '/events' | string
  query: { page: number; size: number }
}
export interface IResGetAllEvents {
  code: string
  message: string
  data: { total: number; size: number; page: number; events: Array<IEvent> }
}
export const useGetAllEvents = ({ page, size }: IReqGetAllEvents['query']) => {
  const url = `/events?page=${page}&size=${size}`
  const queryKey = [url]
  const queryFn = () =>
    NetworkManager.request<IReqGetAllEvents, IResGetAllEvents>({ method: 'GET', url }).then((res) => res.data)

  return useSuspenseQuery({ queryKey, queryFn })
}

export interface IReqGetEventById {
  method: 'GET'
  url: '/events/:event_id' | string
}
export interface IResGetEventById {
  code: string
  message: string
  data: { event: IEvent }
}
export const useGetEventById = (id: string) => {
  const url = `/events/${id}`
  const queryKey = [url]
  const queryFn = () =>
    NetworkManager.request<IReqGetEventById, IResGetEventById>({ method: 'GET', url }).then((res) => res.data)

  return useSuspenseQuery({ queryKey, queryFn })
}

export interface IReqCreateEvent {
  method: 'POST'
  url: '/events' | string
  data: { type: string; name: string; cont: string }
}
export interface IResCreateEvent {
  code: string
  message: string
  data: { event: IEvent }
}
export const useCreateEvent = (data: IReqCreateEvent['data']) => {
  const url = `/events`
  const queryFn = () =>
    NetworkManager.request<IReqCreateEvent, IResCreateEvent>({ method: 'POST', url, data }).then((res) => res.data)

  return useMutation(queryFn)
}
