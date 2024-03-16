import css from './Home.view.module.css'
import { HomeEventList } from './components/HomeEventList'

const HomeView: React.FC = () => {
  return <Content />
}

export default HomeView

const Content: React.FC = () => {
  return (
    <div className={css.wrap}>
      <h1 className={css.head}>{/* view.home */}</h1>
      <div className={css.body}>
        <HomeEventList />
      </div>
    </div>
  )
}
