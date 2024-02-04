import { ReactNode } from 'react'

const HomeView: React.FC = () => {
  return <HomeViewLayout></HomeViewLayout>
}
const HomeViewLayout: React.FC = (): ReactNode => {
  return (
    <div>
      <h1>Home Template Layout</h1>
      <div>{JSON.stringify({})}</div>
    </div>
  )
}

export default HomeView
