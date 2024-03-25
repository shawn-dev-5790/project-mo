import RequestManagerAxios from './RequestManager.axios'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IAppRequestConfig {
  'svc-token'?: string
  'svc-language'?: string
  'svc-request'?: string
}

export default class RequestManager {
  private static readonly instance: RequestManager = new RequestManager()

  private constructor() {
    if (RequestManager.instance) throw new Error('Singleton class. Use getInstance method.')
  }

  static getInstance(): RequestManager {
    return RequestManager.instance
  }

  // request.axios - main
  private main_server: RequestManagerAxios = new RequestManagerAxios({
    baseURL: 'http://localhost:3000',
    headers: { 'Content-Type': 'application/json' },
  })
  public async request<Req, Res>(req: Req): Promise<AxiosResponse<Res>> {
    return RequestManager.instance.main_server.instance.request<Res>(req as AxiosRequestConfig)
  }

  // request.axios - log
  private log_server: RequestManagerAxios = new RequestManagerAxios({
    baseURL: 'http://localhost:4802',
    headers: { 'Content-Type': 'application/json' },
  })
  public async requestLog<Req, Res>(req: Req): Promise<AxiosResponse<Res>> {
    return RequestManager.instance.log_server.instance.request<Res>(req as AxiosRequestConfig)
  }
}
