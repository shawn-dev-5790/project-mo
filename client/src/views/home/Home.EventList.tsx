import css from './Home.EventList.module.css'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppAsync } from '../../app/AppAsync'
import { AppFallbackError, AppFallbackLoading } from '../../app/AppFallback'
import { useAppDateManager } from '../../_core_/adaptor/date_manager/DateManager._hook_'
import {
  IResGetAllEvents,
  useCreateEvent,
  useDeleteEvent,
  useGetAllEvents,
  useGetEventById,
  useUpdateEvent,
} from '../../_core_/adaptor/request_manager/RequestManager._hook_.events'
import AppHorizontalCalendar from '../../components/AppHorizontalCalendar'

const HomeEventList: React.FC = () => {
  const { parse, generate } = useAppDateManager()
  const calendarDates = generate(14).map((date, i) => ({
    id: String(i),
    day: parse(date).get('day') || '',
    weekday: parse(date).get('weekday') || '',
  }))

  const { mutateAsync: createEvent } = useCreateEvent({ type: 'type', name: 'name', cont: 'cont', img: '' })

  return (
    <div className={css.wrap}>
      <div className={css.head}>
        <h3>
          <img src="https://i.pinimg.com/564x/60/db/4f/60db4ff94832ff0b83c539dca1232180.jpg" alt="" />
          <p>
            <b className="fs_1200 fw_900">Halloween Deals</b>
            <i className="fs_600 fw_500 ellip_2">
              Dive into the spirit of Halloween with our Spooktacular Deals! Unleash the fun and excitement of the
              season with terrifyingly good discounts on costumes, decorations, and treats. Don't let these
              spine-chilling savings vanish into the night!
            </i>
          </p>
        </h3>
        <AppHorizontalCalendar
          dates={calendarDates}
          initialSelectedDateId={String(new Date().getDay())}
          onSelectDate={(date) => console.log(date)}
        />
      </div>
      <div className={css.body}>
        <AppAsync onError={<AppFallbackError />} onLoad={<AppFallbackLoading />} children={<EventCards page={1} />} />
      </div>
      <div className={css.foot}>
        <button className="box" onClick={() => createEvent()}>
          Create
        </button>
        <span className="box">Update</span>
        <span className="box">Delete</span>
      </div>
    </div>
  )
}

const EventCards: React.FC<{ page: number }> = ({ page }) => {
  const { data: allEentsRes = null, refetch } = useGetAllEvents(page, 10)

  return (
    <ul className={css.wrap_event_cards}>
      {(allEentsRes?.data.events || []).map((event) => (
        <li key={event.id}>
          <AppAsync
            onError={<AppFallbackError />}
            onLoad={<AppFallbackLoading />}
            children={<EventCard event={event} refetch={refetch} />}
          />
        </li>
      ))}
    </ul>
  )
}

const EventCard: React.FC<{
  event: IResGetAllEvents['data']['events'][number]
  refetch: () => void
}> = ({ event, refetch }) => {
  const { data: eventRes = null } = useGetEventById(event.id)
  const [eventToUpdate, setEventToUpdate] = useState({
    type: eventRes?.data.event.type || '',
    name: eventRes?.data.event.name || '',
    cont: eventRes?.data.event.cont || '',
  })
  const { mutateAsync: updateEvent } = useUpdateEvent(event.id, eventToUpdate)
  const { mutateAsync: deleteEvent } = useDeleteEvent(event.id)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const onUpdateEventData = (attr: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setEventToUpdate({ ...eventToUpdate, [attr]: e.target.value })

  return (
    <>
      <Link className={css.wrap_event_card} to={`/events/${event.id}`}>
        <div className={css.event_img}>
          <img src={event.img} alt="event img" />
        </div>
        <div className={css.event_info}>
          <p className="fs_1200 fw_900 mb_500">{event.name}</p>
          <p className="fs_900 fw_500 ellip_2">{event.cont}</p>
        </div>
      </Link>
      <div className={css.btns}>
        <button onClick={() => setOpenUpdateDialog((prev) => !prev)}>Edit</button>
        <button onClick={() => setOpenDeleteDialog((prev) => !prev)}>Delete</button>
        <dialog open={openUpdateDialog}>
          <summary>Editor</summary>
          <div>
            <button onClick={() => setOpenUpdateDialog((prev) => !prev)}>close</button>
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
            <button
              onClick={() =>
                updateEvent()
                  .then(() => refetch())
                  .then(() => setOpenUpdateDialog(false))
              }
            >
              Update
            </button>
          </div>
        </dialog>
        <dialog open={openDeleteDialog}>
          <summary>Remover</summary>
          <div>
            <button onClick={() => setOpenUpdateDialog((prev) => !prev)}>close</button>
            <p>Are you sure you want to delete?</p>
            <button
              onClick={() =>
                deleteEvent()
                  .then(() => refetch())
                  .then(() => setOpenDeleteDialog(false))
              }
            >
              Delete
            </button>
          </div>
        </dialog>
      </div>
    </>
  )
}

export default HomeEventList
