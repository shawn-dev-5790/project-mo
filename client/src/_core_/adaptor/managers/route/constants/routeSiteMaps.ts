const ROUTE_SITE_MAPS: Array<IRouteSiteMap> = [
  { name: 'home', path: '/' },
  { name: 'users', path: '/users' },
  { name: 'gallery', path: '/gallery' },
]

export default ROUTE_SITE_MAPS

export interface IRouteSiteMap {
  name: string
  path: string
}
