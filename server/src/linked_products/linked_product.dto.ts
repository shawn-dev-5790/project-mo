import { Product } from 'src/products/product.dto'

export class LinkedProductRes {
  code: string
  message: string
  data: {
    lang: LinkedProductLanguage
    linked_product: LinkedProduct
  }
}
export class LinkedProduct {
  id: string
  name: string
  desc: string
  img_url: string
  created_at: Date
  updated_at: Date
  links: LinkedProductLink[]
  stat: LinkedProductStat | null
}
export class LinkedProductStat {
  view_cnt: number
  click_cnt: number
  like_cnt: number
}
export class LinkedProductLink {
  product_id: Product['id']
  pos_x: number
  pos_y: number
}
export class LinkedProductOptions {
  length: number
  lang_type: 'ko' | 'en' | 'ja'
}
export class LinkedProductLanguage {
  name: string
  desc: string
  created_at: string
  updated_at: string
  stat: string
  view_cnt: string
  click_cnt: string
  like_cnt: string
}
