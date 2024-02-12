const ROUTE_ERROR_MESSAGES: Array<IRouteErrorMessage> = [
  {
    code: '404',
    lang: 'ko',
    title: '페이지를 찾을 수 없음',
    desc: '죄송합니다. 요청하신 페이지를 찾을 수 없습니다.',
  },
  {
    code: '403',
    lang: 'ko',
    title: '접근 권한 없음',
    desc: '죄송합니다. 해당 페이지에 접근할 권한이 없습니다.',
  },
]

export default ROUTE_ERROR_MESSAGES

export interface IRouteErrorMessage {
  code: string
  lang: string
  title: string
  desc: string
}
