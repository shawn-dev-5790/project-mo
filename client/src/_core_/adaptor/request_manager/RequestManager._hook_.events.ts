import { UseMutationOptions, useMutation, useSuspenseQuery } from '@tanstack/react-query'
import RequestManager from './RequestManager'

export interface IModelEvent {
  id: string
  type: string
  img: string
  name: string
  cont: string
  created_at: Date
  updated_at: Date
  deleted_at: Date | null
}

export interface IReqGetAllEvents {
  method: 'GET'
  url: '/events' | string
  params: { page: number; size: number }
}
export interface IResGetAllEvents {
  code: string
  message: string
  data: {
    total: number
    size: number
    page: number
    events: Array<IModelEvent>
  }
}

export const useGetAllEvents = (page: number, size: number) => {
  const req: IReqGetAllEvents = {
    method: 'GET',
    url: '/events',
    params: { page, size },
  }
  return useSuspenseQuery({
    queryKey: [req.url, req.params.page, req.params.size],
    queryFn: () =>
      RequestManager.getInstance()
        .request<IReqGetAllEvents, IResGetAllEvents>(req)
        .then((res) => res.data),
  })
}

export interface IReqGetEventById {
  method: 'GET'
  url: '/events/:id' | string
  path: { id: string }
}
export interface IResGetEventById {
  code: string
  message: string
  data: {
    event: IModelEvent
  }
}
export const useGetEventById = (id: string) => {
  const req: IReqGetEventById = {
    method: 'GET',
    url: `/events/${id}`,
    path: { id },
  }
  return useSuspenseQuery({
    queryKey: [req.url, req.path.id],
    queryFn: () =>
      RequestManager.getInstance()
        .request<IReqGetEventById, IResGetEventById>(req)
        .then((res) => res.data),
  })
}

export interface IReqCreateEvent {
  method: 'POST'
  url: '/events' | string
  data: Pick<IModelEvent, 'type' | 'name' | 'cont' | 'img'>
}
export interface IResCreateEvent {
  code: string
  message: string
  data: {
    event: IModelEvent
  }
}
export const useCreateEvent = (data: IReqCreateEvent['data'], options: UseMutationOptions = {}) => {
  const req: IReqCreateEvent = {
    method: 'POST',
    url: '/events',
    data,
  }
  return useMutation({
    mutationKey: [req.url],
    mutationFn: () =>
      RequestManager.getInstance()
        .request<IReqCreateEvent, IResCreateEvent>(req)
        .then((res) => res.data),
    ...options,
  })
}

export interface IReqUpdateEvent {
  method: 'PATCH'
  url: '/events/:id' | string
  path: { id: string }
  data: Partial<Pick<IModelEvent, 'name' | 'cont'>>
}
export interface IResUpdateEvent {
  code: string
  message: string
  data: {
    event: IModelEvent
  }
}
export const useUpdateEvent = (id: string, data: IReqUpdateEvent['data'], options: UseMutationOptions = {}) => {
  const req: IReqUpdateEvent = {
    method: 'PATCH',
    url: `/events/${id}`,
    path: { id },
    data,
  }
  return useMutation({
    mutationKey: [req.url, req.path.id],
    mutationFn: () =>
      RequestManager.getInstance()
        .request<IReqUpdateEvent, IResUpdateEvent>(req)
        .then((res) => res.data),
    ...options,
  })
}

export interface IReqDeleteEvent {
  method: 'DELETE'
  url: '/events/:id' | string
  path: { id: string }
}
export interface IResDeleteEvent {
  code: string
  message: string
  data: { event: IModelEvent }
}
export const useDeleteEvent = (id: string, options: UseMutationOptions = {}) => {
  const req: IReqDeleteEvent = {
    method: 'DELETE',
    url: `/events/${id}`,
    path: { id },
  }
  return useMutation({
    mutationKey: [req.url, req.path.id],
    mutationFn: () =>
      RequestManager.getInstance()
        .request<IReqDeleteEvent, IResDeleteEvent>(req)
        .then((res) => res.data),
    ...options,
  })
}
