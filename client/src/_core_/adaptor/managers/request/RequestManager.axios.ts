import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from 'axios'
import { IAppRequestConfig } from './RequestManager'
import {
  addAuthTokenToRequestHeader,
  addLocaleToRequestHeader,
  checkServiceExceptionRequest,
  onExpiredAuthToken,
  onSentryError,
  onStatus401,
} from './RequestManager.helper'

export type TInternalAppRequestConfig = InternalAxiosRequestConfig<IAppRequestConfig>

export default class RequestManagerAxios {
  public instance: AxiosInstance

  constructor(config: CreateAxiosDefaults) {
    this.instance = this.createInstance(config)
  }

  private createInstance(config: CreateAxiosDefaults): AxiosInstance {
    const instance = axios.create(config)
    instance.interceptors.request.use(this.onRequestInterceptSuccess, this.onRequestInterceptFailure)
    instance.interceptors.response.use(this.onResponseInterceptSuccess, this.onResponseInterceptFailure)
    return instance
  }

  private onRequestInterceptSuccess(req: TInternalAppRequestConfig): TInternalAppRequestConfig {
    if (checkServiceExceptionRequest(req)) return req
    req = addAuthTokenToRequestHeader<TInternalAppRequestConfig>(req, localStorage.getItem('AUTH_TOKEN'))
    req = addLocaleToRequestHeader<TInternalAppRequestConfig>(req, localStorage.getItem('LOCALE'))
    return req
  }

  private onRequestInterceptFailure(err: AxiosError): Promise<AxiosRequestConfig> {
    return Promise.reject(err)
  }

  private onResponseInterceptSuccess(res: AxiosResponse): AxiosResponse {
    return res
  }

  private onResponseInterceptFailure(err: AxiosError): Promise<AxiosRequestConfig> {
    if (onSentryError(err)) return Promise.reject(err)
    if (onExpiredAuthToken(err)) return Promise.reject(err)
    if (onStatus401(err)) return Promise.reject(err)
    return Promise.reject(err)
  }
}
