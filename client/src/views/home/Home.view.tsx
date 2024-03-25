import css from './Home.view.module.css'

import HomeEventList from './Home.EventList'
import AppHeader from '../../components/AppHeader'

const HomeView: React.FC = () => {
  return (
    <div className={css.wrap}>
      <header className={css.head}>
        <AppHeader />
      </header>
      <main className={css.body}>
        <HomeEventList />
      </main>
    </div>
  )
}

export default HomeView
