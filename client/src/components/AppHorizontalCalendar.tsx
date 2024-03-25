import css from './AppHorizontalCalendar.module.css'

import { useState } from 'react'

export interface IAppWeeklyCalendarDate {
  id: string
  weekday: string
  day: string
}

const AppHorizontalCalendar: React.FC<{
  dates: Array<IAppWeeklyCalendarDate>
  initialSelectedDateId?: string
  onSelectDate?: (date: IAppWeeklyCalendarDate) => void
}> = ({ dates, initialSelectedDateId = undefined, onSelectDate = () => null }) => {
  const [checked, setChecked] = useState<string | undefined>(initialSelectedDateId)

  return (
    <div className={css.wrap}>
      <strong className="screen_out">app weekly calendar</strong>
      <ul className={css.week}>
        {dates.map(({ id, weekday, day }, i) => (
          <li className={css.weekday} key={id}>
            <input
              hidden
              type="checkbox"
              id={id}
              checked={checked === id}
              onChange={() => {
                setChecked(id)
                onSelectDate(dates[i])
              }}
            />
            <label htmlFor={id}>
              <span className="fs_900 fw_500">{weekday}</span>
              <span className="fs_1200 fw_900">{day}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AppHorizontalCalendar
