import css from './GalleryLinkedImage.module.css'
import { useReadLinkedProduct } from '../../../_core_/managers/network/endpoints/getLinkedProduct'

export const GalleryLinkedImage: React.FC = () => {
  const { data: linkedProductsRes = null } = useReadLinkedProduct({ query: { lang: 'ko', size: 5 } })

  const data = linkedProductsRes?.data || null

  return (
    <>
      {data && (
        <section className={css.wrap}>
          {/* SECTION HEAD */}
          <div>
            <strong>Hyperlinked Image</strong>
            <p>An image that functions as a link. Clicking it will redirect you to another location</p>
          </div>
          {/* SECTUON CONT */}
          <div className={css.cont}>
            <div className={css.cont_img}>
              <img src={data.linked_product.img_url} alt="" />
            </div>
            {/* <div className={css.linked_img}>
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
                </div> */}
          </div>
        </section>
      )}
    </>
  )
}
