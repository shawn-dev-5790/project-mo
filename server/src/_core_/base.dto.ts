export class BaseRes {
  code: string
  message: string
  data: unknown
}
export class BasePage {
  total: number
  size: number
  page: number
}
