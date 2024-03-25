import { useReadUser } from '../../_core_/managers/network/endpoints/getUser'
import { useReadUsers } from '../../_core_/managers/network/endpoints/getUsers'
import {
  AppProtectorForPermission,
  AppProtectorForDivice,
  AppProtectorForLegion,
  AppProtectorForSiteId,
  AppProtectorForCampaignId,
  AppProtectorForView,
} from '../../_core_/managers/react/AppProtector'

const DummyView: React.FC = () => {
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

export default DummyView

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
