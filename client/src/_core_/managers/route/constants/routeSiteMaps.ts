const ROUTE_SITE_MAPS: Array<IRouteSiteMap> = [
  { name: 'home', path: '/' },
  { name: 'sing-in', path: '/sing-in' },
  { name: 'sign-up', path: '/sign-up' },
  { name: 'password-reset', path: '/password-reset' },
  { name: 'users', path: '/users' },
  { name: 'gallery', path: '/gallery' },
  { name: 'layout', path: '/layout' },
  { name: 'campaign', path: '/campaign' },
]

export default ROUTE_SITE_MAPS

export interface IRouteSiteMap {
  name: string
  path: string
}
