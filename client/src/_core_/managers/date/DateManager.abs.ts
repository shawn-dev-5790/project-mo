// 날짜 객체의 키값이나 포맷을 정의
export type TParse =
  | 'locale' // loc
  | 'localeMonthLong'
  | 'localeMonthNarrow'
  | 'localeMonthShort'
  | 'localeWeekdayLong'
  | 'localeWeekdayNarrow'
  | 'localeWeekdayShort'
  | 'timezone' // tz
  | 'timezoneName'
  | 'year' // dtm
  | 'month'
  | 'day'
  | 'hour'
  | 'minute'
  | 'second'

export type TFormat =
  | 'HH:mm'
  | 'MMM dd, yyyy HH:mm EEE O'
  | 'MMM dd, yyyy HH:mm'
  | 'MMM dd, yyyy'
  | 'yyyy-MM-dd'
  | 'yyyy.MM.dd'
  | 'yyyy.MM.dd HH:mm'
  | 'yyyy.MM.dd EEE HH:mm:ss'

export abstract class AbsDateManager {
  // priavte locale: string
  // private timezone: string
  abstract setLocale(locale: string): void
  abstract setTimezone(timezone: string): void
  abstract encode(date: Date | string): AbsAppDate
  abstract decode(date: AbsAppDate): AbsAppDate['origin']
  abstract parse(date: Date): ReturnType<AbsAppDate['parse']>
  abstract format(date: Date): ReturnType<AbsAppDate['format']>
}

export abstract class AbsAppDate {
  //   private locale: string
  //   private timezone: string
  abstract origin: Date
  abstract parse(): Record<TParse, string>
  abstract format(): Record<TFormat, string>
}
