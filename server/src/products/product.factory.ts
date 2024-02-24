import { Product, ProductLanguage, ProductOptions, ProductRes, ProductsRes } from './product.dto'

export class ProductFactory {
  private product_id: number

  constructor() {
    this.product_id = 1
  }

  private autoIncreaseProductId(): string {
    this.product_id += 1
    return ['product', 'id', this.product_id].join('_')
  }
  private randomeString(name: string): string {
    return ['product', name, Math.floor(Math.random() * 100)].join('_')
  }
  private randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  private randomPick(list: string[]): string {
    return list[Math.floor(Math.random() * list.length)]
  }
  private randomUrl(w: number, h: number, name: string): string {
    return `https://dummyimage.com/${w}x${h}/000/fff&text=${name}`
  }
  private randomDate(): Date {
    return new Date(+new Date() - Math.floor(Math.random() * 10000000000))
  }

  public generateProductsRes(options: ProductOptions): ProductsRes {
    const products: Product[] = Array.from({ length: options.length }, () => ({
      id: this.autoIncreaseProductId(),
      name: this.randomeString('name'),
      desc: this.randomeString('desc'),
      price: this.randomNumber(1000, 10000),
      category: this.randomPick(['food', 'clothes', 'electronics', 'furniture']),
      stock: this.randomNumber(0, 1000),
      image_url: this.randomUrl(200, 200, 'product'),
      created_at: this.randomDate(),
      updated_at: this.randomDate(),
    }))
    const langPack: Record<typeof options.lang_type, ProductLanguage> = {
      ko: {
        name: '이름',
        desc: '설명',
        price: '가격',
        category: '카테고리',
        stock: '재고',
        image_url: '이미지 URL',
        created_at: '생성일',
        updated_at: '수정일',
      },
      en: {
        name: 'Name',
        desc: 'Description',
        price: 'Price',
        category: 'Category',
        stock: 'Stock',
        image_url: 'Image URL',
        created_at: 'Created At',
        updated_at: 'Updated At',
      },
      ja: {
        name: '名前',
        desc: '説明',
        price: '価格',
        category: 'カテゴリ',
        stock: '在庫',
        image_url: '画像 URL',
        created_at: '作成日',
        updated_at: '更新日',
      },
    }
    const lang: ProductLanguage = langPack[options.lang_type] || langPack['ko']

    return {
      code: '0000',
      message: 'SUCCESS',
      data: {
        lang: lang,
        products,
      },
    }
  }
  public generateProductRes(id: string, options: ProductOptions): ProductRes {
    const product: Product = {
      id: id,
      name: this.randomeString('name'),
      desc: this.randomeString('desc'),
      price: this.randomNumber(1000, 10000),
      category: this.randomPick(['food', 'clothes', 'electronics', 'furniture']),
      stock: this.randomNumber(0, 1000),
      image_url: this.randomUrl(200, 200, 'product'),
      created_at: this.randomDate(),
      updated_at: this.randomDate(),
    }
    const langPack: Record<typeof options.lang_type, ProductLanguage> = {
      ko: {
        name: '이름',
        desc: '설명',
        price: '가격',
        category: '카테고리',
        stock: '재고',
        image_url: '이미지 URL',
        created_at: '생성일',
        updated_at: '수정일',
      },
      en: {
        name: 'Name',
        desc: 'Description',
        price: 'Price',
        category: 'Category',
        stock: 'Stock',
        image_url: 'Image URL',
        created_at: 'Created At',
        updated_at: 'Updated At',
      },
      ja: {
        name: '名前',
        desc: '説明',
        price: '価格',
        category: 'カテゴリ',
        stock: '在庫',
        image_url: '画像 URL',
        created_at: '作成日',
        updated_at: '更新日',
      },
    }
    const lang: ProductLanguage = langPack[options.lang_type] || langPack['ko']

    return {
      code: '0000',
      message: 'SUCCESS',
      data: {
        lang: lang,
        product,
      },
    }
  }
}
