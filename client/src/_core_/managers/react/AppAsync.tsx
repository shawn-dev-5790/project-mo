import { AppErrorBoundary } from './AppErrorBoundary'
import { AppSuspense } from './AppSuspense'

export const AppAsync: React.FC<{
  onError: React.ReactNode
  onLoad: React.ReactNode
  children: React.ReactNode
}> = ({ onError, onLoad, children }) => {
  return (
    <AppErrorBoundary fallback={onError}>
      <AppSuspense fallback={onLoad}>{children}</AppSuspense>
    </AppErrorBoundary>
  )
}
