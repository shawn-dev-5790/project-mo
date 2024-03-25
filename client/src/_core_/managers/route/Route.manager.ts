import ROUTE_ERROR_MESSAGES from './constants/routeErrorMessages'
import ROUTE_SITE_MAPS from './constants/routeSiteMaps'

class RouteManager {
  private static readonly instance: RouteManager = new RouteManager()
  private constructor() {
    if (RouteManager.instance) throw new Error('싱글톤 클래스입니다. getInstance 메소드를 사용하세요')
  }
  public static getInstance(): RouteManager {
    return RouteManager.instance
  }
  public getSiteMapByName(name: string) {
    return ROUTE_SITE_MAPS.find((siteMap) => siteMap.name === name)
  }
  public getErrorMessagesByCode(code: string) {
    return ROUTE_ERROR_MESSAGES.find((errorMessage) => errorMessage.code === code)
  }
}

export default RouteManager.getInstance()
