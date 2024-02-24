import { useSuspenseQuery } from '@tanstack/react-query'
import NetworkManager from '../Network.manager'
import { Nullable } from 'vitest'
import { sleep } from '../../../../util/sleep'

export interface IReqGetLinkedProduct {
  method: 'GET'
  url: 'http://localhost:3000/linked-products/?' | string
  query: {
    lang: 'ko' | 'en' | 'ja'
    size: number
  }
}

export interface IResGetLinkedProduct {
  code: string
  message: string
  data: {
    lang: {
      name: string
      desc: string
      created_at: string
      updated_at: string
      stat: string
      view_cnt: string
      click_cnt: string
      like_cnt: string
    }
    linked_product: {
      id: string
      name: string
      desc: string
      img_url: string
      created_at: Date
      updated_at: Date
      links: Array<{
        product_id: string
        pos_x: number
        pos_y: number
      }>
      stat: Nullable<{
        view_cnt: number
        click_cnt: number
        like_cnt: number
      }>
    }
  }
}

export const reqGetLinkedProduct = (props: Omit<IReqGetLinkedProduct, 'method' | 'url'>) => {
  const domain = 'http://localhost:3000/linked-products/?'

  return NetworkManager.request<IReqGetLinkedProduct, IResGetLinkedProduct>({
    method: 'GET',
    url: domain,
    params: props.query,
  })
}

export const useReadLinkedProduct = (props: Omit<IReqGetLinkedProduct, 'method' | 'url'>) => {
  const domain = 'http://localhost:3000/linked-products/?'
  const query = ['lang=' + props.query.lang, 'size=' + props.query.size].join('&')

  return useSuspenseQuery({
    queryKey: [domain + query],
    queryFn: () =>
      reqGetLinkedProduct(props)
        .then((res) => res.data)
        .then((res) => sleep<IResGetLinkedProduct>(300, res)),
  })
}
