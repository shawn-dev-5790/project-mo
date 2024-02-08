import { AppErrorBoundary } from './AppErrorBoundary'
import { AppSuspense } from './AppSuspense'
import { AppFallback } from './AppFallback'
import { useReadUser } from '../endpoints/getUser'

/**
 * AppProtector는 에러, 로딩, 체커를 props로 받아 각각의 상황에 맞게 렌더링합니다.
 */
const AppProtector: React.FC<{ error: React.ReactNode; loading: React.ReactNode; checker: React.ReactNode }> = (
  props,
) => {
  return (
    <AppErrorBoundary fallback={props.error}>
      <AppSuspense fallback={props.loading}>{props.checker}</AppSuspense>
    </AppErrorBoundary>
  )
}

/**
 * PermissionChecker는 권한을 확인하는 컴포넌트입니다.
 */
const PermissionChecker: React.FC<{ children: React.ReactNode }> = (props) => {
  useReadUser({ path: { userId: 1 } })
  return <>{props.children}</>
}

/**
 * DiviceChecker는 디바이스를 확인하는 컴포넌트입니다.
 */
const DiviceChecker: React.FC<{ children: React.ReactNode }> = (props) => {
  useReadUser({ path: { userId: 2 } })
  return <>{props.children}</>
}

/**
 * LegionChecker는 지역을 확인하는 컴포넌트입니다.
 */
const LegionChecker: React.FC<{ children: React.ReactNode }> = (props) => {
  useReadUser({ path: { userId: 3 } })
  return <>{props.children}</>
}

/**
 * SiteIdChecker는 사이트 ID를 확인하는 컴포넌트입니다.
 */
const SiteIdChecker: React.FC<{ children: React.ReactNode }> = (props) => {
  useReadUser({ path: { userId: 4 } })
  return <>{props.children}</>
}

/**
 * CampaignIdChecker는 캠페인 ID를 확인하는 컴포넌트입니다.
 */
const CampaignIdChecker: React.FC<{ children: React.ReactNode }> = (props) => {
  useReadUser({ path: { userId: 5 } })
  return <>{props.children}</>
}

/**
 * AppProtectorForPermission은 권한을 확인하고, 에러나 로딩 상황에 따라 적절한 메시지를 보여줍니다.
 */
export const AppProtectorForPermission: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <AppProtector
      error={
        <AppFallback
          img="https://dummyimage.com/200x200/000/fff&text=:)"
          title="권한 정보가 없습니다."
          desc="여기로 문의해주세요."
        />
      }
      loading={
        <AppFallback
          img="https://dummyimage.com/200x200/000/fff&text=:)"
          title="권한을 확인 중입니다."
          desc="잠시만 기다려주세요."
        />
      }
      checker={<PermissionChecker>{props.children}</PermissionChecker>}
    />
  )
}

/**
 * AppProtectorForSiteId는 사이트 ID를 확인하고, 에러나 로딩 상황에 따라 적절한 메시지를 보여줍니다.
 */
export const AppProtectorForSiteId: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <AppProtector
      error={
        <AppFallback
          img="https://dummyimage.com/200x200/000/fff&text=:)"
          title="사이트 정보가 없습니다."
          desc="여기로 문의해주세요."
        />
      }
      loading={
        <AppFallback
          img="https://dummyimage.com/200x200/000/fff&text=:)"
          title="사이트 정보를 확인 중입니다."
          desc="잠시만 기다려주세요."
        />
      }
      checker={<SiteIdChecker>{props.children}</SiteIdChecker>}
    />
  )
}

/**
 * AppProtectorForCampaignId는 캠페인 ID를 확인하고, 에러나 로딩 상황에 따라 적절한 메시지를 보여줍니다.
 */
export const AppProtectorForCampaignId: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <AppProtector
      error={
        <AppFallback
          img="https://dummyimage.com/200x200/000/fff&text=:)"
          title="캠페인 정보가 없습니다."
          desc="여기로 문의해주세요."
        />
      }
      loading={
        <AppFallback
          img="https://dummyimage.com/200x200/000/fff&text=:)"
          title="캠페인 정보를 확인 중입니다."
          desc="잠시만 기다려주세요."
        />
      }
      checker={<CampaignIdChecker>{props.children}</CampaignIdChecker>}
    />
  )
}

/**
 * AppProtectorForDivice는 디바이스를 확인하고, 에러나 로딩 상황에 따라 적절한 메시지를 보여줍니다.
 */
export const AppProtectorForDivice: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <AppProtector
      error={
        <AppFallback
          img="https://dummyimage.com/200x200/000/fff&text=:)"
          title="디바이스 정보가 없습니다."
          desc="여기로 문의해주세요."
        />
      }
      loading={
        <AppFallback
          img="https://dummyimage.com/200x200/000/fff&text=:)"
          title="디바이스 정보를 확인 중입니다."
          desc="잠시만 기다려주세요."
        />
      }
      checker={<DiviceChecker>{props.children}</DiviceChecker>}
    />
  )
}

/**
 * AppProtectorForLegion은 지역을 확인하고, 에러나 로딩 상황에 따라 적절한 메시지를 보여줍니다.
 */
export const AppProtectorForLegion: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <AppProtector
      error={
        <AppFallback
          img="https://dummyimage.com/200x200/000/fff&text=:)"
          title="지역 정보가 없습니다."
          desc="여기로 문의해주세요."
        />
      }
      loading={
        <AppFallback
          img="https://dummyimage.com/200x200/000/fff&text=:)"
          title="지역 정보를 확인 중입니다."
          desc="잠시만 기다려주세요."
        />
      }
      checker={<LegionChecker>{props.children}</LegionChecker>}
    />
  )
}

/**
 * AppProtectorForView는 페이지 뷰를 보호하며, 에러나 로딩 상황에 따라 적절한 메시지를 보여줍니다.
 */
export const AppProtectorForView: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <AppProtector
      error={
        <AppFallback
          img="https://dummyimage.com/200x200/000/fff&text=:)"
          title="페이지에서 알 수 없는 에러가 발생하였습니다."
          desc="여기로 문의해주세요."
        />
      }
      loading={
        <AppFallback
          img="https://dummyimage.com/200x200/000/fff&text=:)"
          title="데이터를 불로오고 있습니다."
          desc="잠시만 기다려주세요."
        />
      }
      checker={<>{props.children}</>}
    />
  )
}
