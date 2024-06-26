import css from './Gallery.module.css'
import { AppSuspense } from '../../app/AppSuspense'
import { AppFallbackError, AppFallbackLoading } from '../../app/AppFallback'
import { GalleryHeader } from './components/GalleryHeader'
import { GalleryProducts } from './components/GalleryProducts'
import { GalleryDetail } from './components/GalleryDetail'
import { GalleryReviews } from './components/GalleryReviews'
import { GalleryLinkedImage } from './components/GalleryLinkedImage'
import { GalleryFooter } from './components/GalleryFooter'
import { AppAsync } from '../../app/AppAsync'

const GalleryView: React.FC = () => {
  return (
    <>
      <Layout />
    </>
  )
}

export default GalleryView

const Layout: React.FC = () => {
  return (
    <div className={css.wrap}>
      <header>
        <AppSuspense fallback={<AppFallbackLoading />} children={<GalleryHeader />} />
      </header>
      <main>
        <AppAsync onError={<AppFallbackError />} onLoad={<AppFallbackLoading />} children={<GalleryLinkedImage />} />
        <AppSuspense fallback={<AppFallbackLoading />} children={<GalleryProducts />} />
        <AppSuspense fallback={<AppFallbackLoading />} children={<GalleryDetail />} />
        <AppSuspense fallback={<AppFallbackLoading />} children={<GalleryReviews />} />
        {/* {Array.from({ length: 10 }, (_, i) => (
          <AppFallbackDummy key={i} idx={i} />
        ))} */}
        <GalleryFooter />
      </main>
    </div>
  )
}
