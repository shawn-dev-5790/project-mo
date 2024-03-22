import css from './HomeEventList.module.css'

import { Link } from 'react-router-dom'
import { appDateManager } from '../../../_core_/adaptor/managers/date/DateManager'
import { AppAsync } from '../../../_core_/adaptor/react/AppAsync'
import { AppFallbackError, AppFallbackLoading } from '../../../_core_/adaptor/react/AppFallback'
import { useGetAllEvents } from '../../../_core_/adaptor/managers/network/endpoints/events/getAllEvents'

appDateManager.setLocale('en')
appDateManager.setTimezone('Asia/Seoul')

export const HomeEventList: React.FC = () => {
  return (
    <div className={css.wrap}>
      <h3 className={css.head}>Main Event</h3>
      <ul className={css.body}>
        {Array.from({ length: 1 }).map((_, i) => (
          <AppAsync
            key={i}
            onError={<AppFallbackError />}
            onLoad={<AppFallbackLoading />}
            children={<EventCards page={1} />}
          />
        ))}
        {/* {hasNext && <LoadMore />} */}
      </ul>
    </div>
  )
  // function LoadMore() {
  //   return (
  //     <li>
  //       <div className={css.wrap_event_card}>
  //         <button onClick={() => setPage((prev) => prev + 1)}>Load More</button>
  //       </div>
  //     </li>
  //   )
  // }
}

const EventCards: React.FC<{ page: number }> = ({ page }) => {
  const { data: allEentsRes = null } = useGetAllEvents({ page, size: 10 })
  const events = allEentsRes?.data.events || []

  return (
    <>
      {events.map((e) => (
        <li key={e.id}>
          <Link className={css.wrap_event_card} to={`/events/${e.id}`}>
            <p className="fs_900 fw_700 mb_500">{e.type}</p>
            <p className="fs_1200 fw_900 mb_700">{e.name}</p>
            <p className="fs_900 fw_500 mb_1000">{e.cont}</p>
            <p className="fs_900 fw_500">{appDateManager.format(e.created_at)['MMM dd, yyyy EEE HH:mm O']}</p>
          </Link>
        </li>
      ))}
    </>
  )
}
