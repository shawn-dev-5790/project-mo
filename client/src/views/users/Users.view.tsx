import { useReadUsers } from '../../dtr/adaptor/endpoints/getUsers'
import { UsersTable } from './components/UsersTable'

const UsersView: React.FC = () => {
  return <Content />
}

export default UsersView

const Content: React.FC = () => {
  const { data: users } = useReadUsers({ query: { page: 1 } })

  return (
    <>
      <UsersTable data={users} lang={null} opts={null} />
    </>
  )
}
