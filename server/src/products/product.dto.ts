export class ProductsRes {
  code: string
  message: string
  data: {
    lang: ProductLanguage
    products: Product[]
  }
}
export class ProductRes {
  code: string
  message: string
  data: {
    lang: ProductLanguage
    product: Product
  }
}
export class Product {
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
export class ProductOptions {
  length: number
  lang_type: 'ko' | 'en' | 'ja'
}
export class ProductLanguage {
  name: string
  desc: string
  price: string
  category: string
  stock: string
  image_url: string
  created_at: string
  updated_at: string
}
