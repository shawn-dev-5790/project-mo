import { useEffect, useState } from 'react'
import { sleep } from '../../../_core_/util/sleep'
import fake from '../_fake_res_/spec.json'
import css from './LinkedImage.module.css'

export const LinkedImage: React.FC = () => {
  const { name, img_url, products } = fake.contents.section.linked_image

  const [dots, setDots] = useState<typeof products>(products.map((p) => ({ ...p, pos: [50, 50] })))

  useEffect(() => {
    sleep(300, {}).then(() => {
      const r = products.map((p) => {
        const x = Math.random() * 80 + 1
        const y = Math.random() * 80 + 1
        return { ...p, pos: [x, y] }
      })
      setDots(r)
    })
  }, [products])

  return (
    <section className={css.wrap}>
      <strong className={css.tit}>링크드 이미지</strong>
      <div className={css.cont}>
        <div className={css.linked_img}>
          <div className={css.frame_linked_img}>
            <img src={img_url + 1} alt={'image of ' + name} />
            <div className={css.products}>
              {dots.map(({ id, pos: [x, y] }) => (
                <button key={id} children={'+'} style={{ left: x + '%', top: y + '%', opacity: 1 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
