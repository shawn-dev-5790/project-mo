import { useReadUser } from '../../dtr/adaptor/endpoints/getUser'
import { useReadUsers } from '../../dtr/adaptor/endpoints/getUsers'
import {
  AppProtectorForPermission,
  AppProtectorForDivice,
  AppProtectorForLegion,
  AppProtectorForSiteId,
  AppProtectorForCampaignId,
  AppProtectorForView,
} from '../../dtr/adaptor/react/AppProtector'

const HomeView: React.FC = () => {
  return (
    <AppProtectorForPermission>
      <AppProtectorForDivice>
        <AppProtectorForLegion>
          <AppProtectorForSiteId>
            <AppProtectorForCampaignId>
              <AppProtectorForView>
                <Content />
              </AppProtectorForView>
            </AppProtectorForCampaignId>
          </AppProtectorForSiteId>
        </AppProtectorForLegion>
      </AppProtectorForDivice>
    </AppProtectorForPermission>
  )
}

export default HomeView

const Content: React.FC = () => {
  const { data: user } = useReadUser({ path: { userId: 1 } })
  const { data: users } = useReadUsers({ query: { page: 1 } })

  return (
    <div>
      <h1>Home Template Layout</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  )
}
