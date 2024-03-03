import css from './FootNav.module.css'

export const FootNav: React.FC = () => {
  return (
    <div className={css.wrap}>
      <strong className={css.tit}>A</strong>
      <ul className={css.cont}>
        <li>home</li>
        <li>main</li>
        <li>my</li>
      </ul>
    </div>
  )
}
