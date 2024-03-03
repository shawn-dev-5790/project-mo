import StyleManager from '../../../_core_/adaptor/managers/style/Style.manager'
import css from './Products.module.css'

export const Products: React.FC = () => {
  return (
    <div className={css.wrap}>
      <h2 className={css.tit}>Products</h2>
      <ul className={StyleManager.merge(css.cont, 'scrollbar-hidden')}>
        {Array.from({ length: 12 }, (_, i) => (
          <li key={i}>
            <div className={css.product}>
              <b>NIKE AIR {i}</b>
              <p>AIR JORDAN 1 MID SE GC</p>
              <i>$ 856</i>
              <span className={css.img_product}>
                <img src="/Clipped_image_20240226_144935.png" alt="" />
              </span>
              <span className={css.btn_detail}>+</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
