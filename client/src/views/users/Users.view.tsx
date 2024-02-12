import { useParams } from 'react-router-dom'
import { useReadUsers } from '../../dtr/adaptor/managers/network/endpoints/getUsers'
import { UsersTable } from './components/UsersTable'

const UsersView: React.FC = () => {
  return <Content />
}

export default UsersView

const Content: React.FC = () => {
  const { userId = '' } = useParams()
  const { data: users } = useReadUsers({ query: { page: +userId || 1 } })

  return (
    <>
      <h1>users , {userId}</h1>
      <UsersTable data={users} lang={null} opts={null} />
    </>
  )
}
