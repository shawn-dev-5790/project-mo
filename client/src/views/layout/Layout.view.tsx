import layout from '../../_core_/adaptor/managers/style/css/layout.module.css'
import css from './Layout.view.module.css'
import { Category } from './components/Category'
import { FootNav } from './components/FootNav'
import { Header } from './components/Header'
import { Products } from './components/Products'

const LayoutView: React.FC = () => {
  return (
    <div className={layout.wrap}>
      <div className={css.wrap}>
        <header>
          <Header />
        </header>
        <nav>
          <Category />
        </nav>
        <main className="scrollbar-hidden">
          <Products />
          <Products />
          <Products />
          <Products />
        </main>
        <footer>
          <FootNav />
        </footer>
      </div>
    </div>
  )
}

export default LayoutView
