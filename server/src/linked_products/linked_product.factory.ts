import {
  LinkedProduct,
  LinkedProductLanguage,
  LinkedProductLink,
  LinkedProductOptions,
  LinkedProductRes,
} from './linked_product.dto'

export class LinkedProductFactory {
  private linked_product_id: number
  private product_id: number

  constructor() {
    this.linked_product_id = 1
    this.product_id = 1
  }

  private autoIncreaseLinkedProductId(): string {
    this.linked_product_id += 1
    return ['linked', 'product', 'id', this.linked_product_id].join('_')
  }
  private autoIncreaseProductId(): string {
    this.product_id += 1
    return ['product', 'id', this.product_id].join('_')
  }
  private randomeString(name: string): string {
    return ['linked', 'product', name, Math.floor(Math.random() * 100)].join('_')
  }
  private randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  private randomPick(list: string[]): string {
    return list[Math.floor(Math.random() * list.length)]
  }
  private randomUrl(): string {
    return `https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/170219952550422552.jpeg?w=1440`
  }
  private randomDate(): Date {
    return new Date(+new Date() - Math.floor(Math.random() * 10000000000))
  }

  public generateLinkedProductRes(options: LinkedProductOptions): LinkedProductRes {
    const links: LinkedProductLink[] = Array.from({ length: options.length }, () => ({
      product_id: this.autoIncreaseProductId(),
      pos_x: this.randomNumber(0, 100),
      pos_y: this.randomNumber(0, 100),
    }))
    const linkedProduct: LinkedProduct = {
      id: this.autoIncreaseLinkedProductId(),
      name: this.randomeString('name'),
      desc: this.randomeString('desc'),
      img_url: this.randomUrl(),
      created_at: this.randomDate(),
      updated_at: this.randomDate(),
      links: links,
      stat: null,
    }
    const langPack: Record<typeof options.lang_type, LinkedProductLanguage> = {
      ko: {
        name: '이름',
        desc: '설명',
        created_at: '생성일',
        updated_at: '수정일',
        stat: '통계',
        view_cnt: '조회수',
        click_cnt: '클릭수',
        like_cnt: '좋아요수',
      },
      en: {
        name: 'Name',
        desc: 'Description',
        created_at: 'Created At',
        updated_at: 'Updated At',
        stat: 'Stat',
        view_cnt: 'View Count',
        click_cnt: 'Click Count',
        like_cnt: 'Like Count',
      },
      ja: {
        name: '名前',
        desc: '説明',
        created_at: '作成日',
        updated_at: '更新日',
        stat: '統計',
        view_cnt: '閲覧数',
        click_cnt: 'クリック数',
        like_cnt: 'いいね数',
      },
    }
    const lang: LinkedProductLanguage = langPack[options.lang_type] || langPack['ko']

    return {
      code: '0000',
      message: 'SUCCESS',
      data: {
        lang,
        linked_product: linkedProduct,
      },
    }
  }
}
