import css from './LinkedProduct.module.css'
import { useReadLinkedProduct } from '../../../_core_/adaptor/managers/network/endpoints/getLinkedProduct'
import { DialogProdcut } from './DialogProduct'
import { useState } from 'react'
import { AppSuspense } from '../../../_core_/adaptor/components/AppSuspense'

export const LinkedProduct: React.FC = () => {
  const { data: linkedProductsRes = null } = useReadLinkedProduct({ query: { lang: 'ko', size: 5 } })

  const data = linkedProductsRes?.data || null

  const [selected, setSelected] = useState<string>('')

  return (
    <>
      {data && (
        <section className={css.wrap}>
          <strong className={css.tit}>{data?.lang.name}</strong>
          <p>{data.lang.desc}</p>
          <div className={css.cont}>
            <div className={css.linked_img}>
              <div className={css.frame_linked_img}>
                <img src={data.linked_product.img_url} alt={'image of ' + data.lang.name} />
                <div className={css.products}>
                  {data?.linked_product.links.map(({ product_id, pos_x, pos_y }) => (
                    <div key={product_id}>
                      <button
                        style={{ left: pos_x + '%', top: pos_y + '%' }}
                        onClick={() => setSelected(product_id)}
                        children={'+'}
                      />
                      {selected === product_id && (
                        <AppSuspense fallback={'loading... product detail'}>
                          <DialogProdcut productId={product_id} />
                        </AppSuspense>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
