import { Suspense } from 'react'

export const AppSuspense: React.FC<{ fallback: React.ReactNode; children: React.ReactNode }> = (props) => {
  return <Suspense fallback={props.fallback} children={props.children} />
}
