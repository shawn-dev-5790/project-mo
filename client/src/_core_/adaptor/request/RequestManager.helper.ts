import { AxiosError } from 'axios'
import { IAppRequestConfig } from './RequestManager'

export function checkServiceExceptionRequest<T>(req: T): boolean {
  return Boolean((req as IAppRequestConfig)['svc-request'])
}

export function addAuthTokenToRequestHeader<T>(req: T, token: string | null): T {
  if ((req as IAppRequestConfig)['svc-token'] && token) (req as IAppRequestConfig)['svc-token'] = token
  return req
}

export function addLocaleToRequestHeader<T>(req: T, locale: string | null): T {
  if ((req as IAppRequestConfig)['svc-language'] && locale) (req as IAppRequestConfig)['svc-language'] = locale
  return req
}

export function onSentryError(err: AxiosError): boolean {
  console.log({
    data: err.response?.data,
    status: err.response?.status,
    headers: err.config?.headers || 'unexpected header',
    params: err.config?.params || 'unexpected params',
  })
  // Sentry.withScope((scope) => {
  //   scope.setTag('dtr-err-type', 'interceptor')
  //   scope.setTag('dtr-status', err.statusCode || 'unexpected')
  //   scope.setContext('dtr-err-info', {
  //     data: err.response?.data,
  //     status: err.response?.status,
  //     headers: err.config?.headers || 'unexpected header',
  //     params: err.config?.params || 'unexpected params',
  //   })
  //   Sentry.captureException(err)
  // })
  return true
}
export function onExpiredAuthToken(err: AxiosError): boolean {
  console.log(err.response?.status)
  return true
}
export function onStatus401(err: AxiosError): boolean {
  if (err.response?.status === 401) return true
  console.log(err.response?.status)
  // reqRefreshAuthToken({ refresh })
  //   .then(({ data: { access } }) => {
  //     setLocalData('AUTH_TOKEN', access)
  //     const req = err.config
  //     if (req.headers) req.headers.Authorization = `Bearer ${access}`
  //     return req
  //   })
  //   .then((req) => {
  //     axios.request(req)
  //     window.location.reload()
  //   })
  //   .catch(() => {
  //     logout()
  //     removeLocalData('AUTH_TOKEN')
  //     removeLocalData('REFRESH_TOKEN')
  //   })
  return false
}
