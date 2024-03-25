import css from './Appheader.module.css'

const AppHeader: React.FC = () => {
  return (
    <div className={css.wrap}>
      <span className="box">ASAP</span>
      <span className="box">AVAT</span>
    </div>
  )
}

export default AppHeader
