import css from './Header.module.css'

export const Header: React.FC = () => {
  return (
    <div className={css.wrap}>
      <h1 className={css.tit}>
        <span className={css.ico_btn}>N</span>
        <strong>ike</strong>
      </h1>
      <ul className={css.cont}>
        <li>
          <button className={css.ico_btn}>M</button>
        </li>
        <li>
          <button className={css.ico_btn}>S</button>
        </li>
      </ul>
    </div>
  )
}
