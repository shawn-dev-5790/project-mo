import { Routes, Route } from 'react-router-dom'
import HomeView from '../views/home/Home.view'
import UsersView from '../views/users/Users.view'
import RouteManager from '../_core_/managers/route/Route.manager'
import GalleryView from '../views/gallery/Gallery.view'
import CampaignView from '../views/campaign/Campaign.view'
import SignInView from '../views/auth/SignIn.view'

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignInView />} />
      <Route path="/sign-up" element={<SignInView />} />
      <Route path="/password-reset" element={<SignInView />} />
      <Route path="/users">
        <Route path="" element={<AppRouteErrorMessage code="404" />} />
        <Route path=":userId" element={<UsersView />} />
      </Route>
      <Route path="/gallery">
        <Route path="" element={<AppRouteErrorMessage code="404" />} />
        <Route path=":galleryId" element={<GalleryView />} />
      </Route>
      <Route path="/campaign" element={<CampaignView />} />
      <Route path="/" element={<HomeView />} />
      <Route path="*" element={<AppRouteErrorMessage code="404" />} />
    </Routes>
  )
}

const AppRouteErrorMessage: React.FC<{ code: string }> = (props) => {
  const msg = RouteManager.getErrorMessagesByCode(props.code)!

  return (
    <div>
      <h2>{msg.code}</h2>
      <strong>{msg.title}</strong>
      <p>{msg.desc}</p>
    </div>
  )
}
