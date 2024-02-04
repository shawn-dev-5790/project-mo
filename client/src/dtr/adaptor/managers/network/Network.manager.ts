import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * NetworkManager는 네트워크 요청을 관리하는 싱글톤 클래스입니다.
 */
class NetworkManager {
  private static readonly instance: NetworkManager = new NetworkManager();

  /**
   * NetworkManager의 생성자입니다.
   * 싱글톤 패턴을 사용하므로, 직접 인스턴스를 생성하는 대신 getInstance 메소드를 사용해야 합니다.
   */
  private constructor() {
    if (NetworkManager.instance) {
      throw new Error("싱글톤 클래스입니다. getInstance 메소드를 사용하세요");
    }
  }

  /**
   * NetworkManager의 인스턴스를 반환합니다.
   * @returns {NetworkManager} NetworkManager의 인스턴스
   */
  public static getInstance(): NetworkManager {
    return NetworkManager.instance;
  }

  /**
   * 주어진 요청 설정을 사용하여 axios 인스턴스를 생성하고, 이 인스턴스에 인터셉터를 설정한 후 요청을 실행합니다.
   * @param {Partial<AxiosRequestConfig>} req - axios 요청 설정
   * @returns {AxiosInstance} 인터셉터가 설정된 axios 인스턴스
   */
  public request<Req, Res>(
    req: Partial<AxiosRequestConfig<Req>>
  ): Promise<AxiosResponse<Res, unknown>> {
    const config = req;

    // config request options
    config.baseURL = "/";
    config.withCredentials = true;

    // config request headers
    config.headers = config.headers || {};
    config.headers["Content-Type"] = "application/json";

    // create request instance
    const instance = axios.create(config);

    // add request interceptors
    instance.interceptors.request.use(
      (req) => req,
      (err) => err
    );

    // add response interceptors
    instance.interceptors.response.use(
      (req) => req,
      (err) => err
    );

    // return request instance
    return instance(config);
  }
}

export default NetworkManager.getInstance();
