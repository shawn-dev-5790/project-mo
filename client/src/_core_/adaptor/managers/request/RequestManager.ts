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

  private baseEngine: RequestManagerAxios = new RequestManagerAxios({
    baseURL: 'http://localhost:3000',
    headers: { 'Content-Type': 'application/json' },
  })

  async request<Req, Res>(req: Req): Promise<AxiosResponse<Res>> {
    return this.baseEngine.instance.request<Res>(req as AxiosRequestConfig)
  }
}

export const appRequestManager = RequestManager.getInstance()
