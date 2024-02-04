import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'

export const AppErrorBoundary: React.FC<{ fallback: React.ReactNode; children: React.ReactNode }> = (props) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          onError={(_, { componentStack }) => console.error(componentStack)}
          fallbackRender={() => props.fallback}
        >
          {props.children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
