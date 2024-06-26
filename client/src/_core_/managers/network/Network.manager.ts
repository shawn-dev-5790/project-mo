import { QueryClientConfig } from '@tanstack/react-query'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

class NetworkManager {
  private static readonly instance: NetworkManager = new NetworkManager()

  private constructor() {
    if (NetworkManager.instance) throw new Error('싱글톤 클래스입니다. getInstance 메소드를 사용하세요')
  }

  public static getInstance(): NetworkManager {
    return NetworkManager.instance
  }

  public get AXIOS_CONFIG(): AxiosRequestConfig {
    return {
      // withCredentials: true,
      baseURL: 'http://localhost:3000',
      headers: { 'Content-Type': 'application/json' },
    }
  }

  public get QUERY_CLIENT_CONFIG(): QueryClientConfig {
    return {
      defaultOptions: {
        queries: { networkMode: 'always' },
        mutations: { networkMode: 'offlineFirst' },
      },
    }
  }

  /**
   * 주어진 요청 설정을 사용하여 axios 인스턴스를 생성하고, 이 인스턴스에 인터셉터를 설정한 후 요청을 실행합니다.
   * @param {Partial<AxiosRequestConfig>} req - axios 요청 설정
   * @returns {AxiosInstance} 인터셉터가 설정된 axios 인스턴스
   */
  public request<Req, Res>(req: AxiosRequestConfig<Req>): Promise<AxiosResponse<Res>> {
    const config: AxiosRequestConfig = { ...this.AXIOS_CONFIG, ...req }

    console.log(config)

    // create request instance
    const instance = axios.create(config)

    // add request interceptors
    instance.interceptors.request.use(
      (req) => req,
      (err) => err,
    )

    // add response interceptors
    instance.interceptors.response.use(
      (req) => req,
      (err) => err,
    )

    // return request instance
    return instance({ ...config })
  }

  // AxiosInstance<any, AxiosResponse<any, any>, any>(config: AxiosRequestConfig<any>) => Promise<AxiosResponse<any, any>>
}

export default NetworkManager.getInstance()
