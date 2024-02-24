import { useSuspenseQuery } from '@tanstack/react-query'
import NetworkManager from '../Network.manager'

export interface IReqGetProduct {
  method: 'GET'
  url: 'http://localhost:3000/products/:productId/?' | string
  path: {
    productId: string
  }
  query: {
    lang: 'ko' | 'en' | 'ja'
  }
}

export interface IResGetProduct {
  code: string
  message: string
  data: {
    lang: {
      name: string
      desc: string
      price: string
      category: string
      stock: string
      image_url: string
      created_at: string
      updated_at: string
    }
    product: {
      id: string // 제품의 고유 식별자
      name: string // 제품의 이름
      desc: string // 제품의 설명
      price: number // 제품의 가격
      category: string // 제품이 속한 카테고리
      stock: number // 제품의 재고 수량
      image_url: string // 제품의 이미지 URL
      created_at: Date // 제품이 생성된 날짜와 시간
      updated_at: Date // 제품이 마지막으로 업데이트된 날짜와 시간
    }
  }
}

export const reqGetProduct = (props: Omit<IReqGetProduct, 'method' | 'url'>) => {
  const domain = `http://localhost:3000/products/${props.path.productId}/?`

  return NetworkManager.request<IReqGetProduct, IResGetProduct>({
    method: 'GET',
    url: domain,
    params: props.query,
  })
}

export const useReadProduct = (props: Omit<IReqGetProduct, 'method' | 'url'>) => {
  const domain = `http://localhost:3000/products/${props.path.productId}/?`
  const query = ['lang=' + props.query.lang].join('&')

  return useSuspenseQuery({
    queryKey: [domain + query],
    queryFn: () => reqGetProduct(props).then((res) => res.data),
  })
}
