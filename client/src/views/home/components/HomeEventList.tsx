import css from './HomeEventList.module.css'

import { Link } from 'react-router-dom'
import { appDateManager } from '../../../_core_/adaptor/managers/date/DateManager'
import { AppAsync } from '../../../_core_/adaptor/react/AppAsync'
import { AppFallbackError, AppFallbackLoading } from '../../../_core_/adaptor/react/AppFallback'
import { useState } from 'react'
import {
  useCreateEvent,
  useGetAllEvents,
  useGetEventById,
  useUpdateEvent,
} from '../../../_core_/adaptor/managers/request/RequestManager._hook_.events'

appDateManager.setLocale('en')
appDateManager.setTimezone('Asia/Seoul')

export const HomeEventList: React.FC = () => {
  return (
    <div className={css.wrap}>
      <h3 className={css.head}>
        <img src="https://i.pinimg.com/564x/b5/e2/54/b5e254e54d58469dd56334c1334c29cf.jpg" alt="" />
      </h3>
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
  const { data: allEentsRes = null } = useGetAllEvents(page, 10)
  const { mutateAsync: createEvent } = useCreateEvent({ type: 'type', name: 'name', cont: 'cont' })
  const events = allEentsRes?.data.events || []

  return (
    <>
      <button onClick={() => createEvent()}>create</button>
      {events.map((event) => (
        <li key={event.id}>
          <AppAsync
            onError={<AppFallbackError />}
            onLoad={<AppFallbackLoading />}
            children={<EventCard eventId={event.id} />}
          />
        </li>
      ))}
    </>
  )
}

const EventCard: React.FC<{ eventId: string }> = ({ eventId }) => {
  const { data: eventRes = null } = useGetEventById(eventId)

  const [eventToUpdate, setEventToUpdate] = useState({
    type: eventRes?.data.event.type || '',
    name: eventRes?.data.event.name || '',
    cont: eventRes?.data.event.cont || '',
    created_at: eventRes?.data.event.created_at || new Date(),
  })
  const { mutateAsync: updateEvent } = useUpdateEvent(eventId, eventToUpdate)

  const [open, setOpen] = useState(false)

  const onToggleDialog = () => setOpen((prev) => !prev)

  const onUpdateEvent = () => updateEvent().then(() => setOpen(false))

  const onUpdateEventData = (attr: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setEventToUpdate({ ...eventToUpdate, [attr]: e.target.value })

  return (
    <>
      <Link className={css.wrap_event_card} to={`/events/${eventId}`}>
        <p className="fs_900 fw_700 mb_500">{eventToUpdate.type}</p>
        <p className="fs_1200 fw_900 mb_700">{eventToUpdate.name}</p>
        <p className="fs_900 fw_500 mb_1000">{eventToUpdate.cont}</p>
        <p className="fs_900 fw_500">{appDateManager.format(eventToUpdate.created_at)['MMM dd, yyyy']}</p>
      </Link>
      <button onClick={onToggleDialog}>Edit</button>
      <dialog open={open}>
        <summary>Editor</summary>
        <div>
          <button onClick={onToggleDialog}>close</button>
          <fieldset>
            <label htmlFor="type">Type</label>
            <input type="text" id="type" defaultValue={eventToUpdate.type} onChange={onUpdateEventData('type')} />
          </fieldset>
          <fieldset>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" defaultValue={eventToUpdate.name} onChange={onUpdateEventData('name')} />
          </fieldset>
          <fieldset>
            <label htmlFor="cont">Content</label>
            <input type="text" id="cont" defaultValue={eventToUpdate.cont} onChange={onUpdateEventData('cont')} />
          </fieldset>
          <button onClick={onUpdateEvent}>SAVE</button>
        </div>
      </dialog>
    </>
  )
}
