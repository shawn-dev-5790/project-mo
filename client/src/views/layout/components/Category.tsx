import StyleManager from '../../../_core_/adaptor/managers/style/Style.manager'
import css from './Category.module.css'

export const Category: React.FC = () => {
  return (
    <div className={StyleManager.merge(css.wrap, 'scrollbar-hidden')}>
      <strong className={css.tit}>Categories</strong>
      <ul className={css.cont}>
        <li>Basketball</li>
        <li>Running</li>
        <li>Training</li>
        <li>Basketball</li>
        <li>Running</li>
        <li>Training</li>
        <li>Basketball</li>
        <li>Running</li>
        <li>Training</li>
      </ul>
    </div>
  )
}
