import DateManagerIntl from './DateManager.intl'

export type TSupportedLocale = 'ko-KR' | 'ja-JP' | 'en-US'

export type TSupportedTimeZone =
  | 'Asia/Seoul'
  | 'Asia/Tokyo'
  | 'America/New_York'
  | 'America/Chicago'
  | 'America/Denver'
  | 'America/Los_Angeles'

export type TDateFormat = 'YYYY.MM.DD'

export interface IAppDateConfig {
  locale: TSupportedLocale
  timeZone: TSupportedTimeZone
}

export default class DateManager {
  private static readonly instance: DateManager = new DateManager()

  private constructor() {
    if (DateManager.instance) throw new Error('Singleton class. Use getInstance method.')
  }

  public static getInstance(): DateManager {
    return DateManager.instance
  }

  // main date - intl
  private intl_date: DateManagerIntl = new DateManagerIntl('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'short',
    timeZoneName: 'short',
    timeZone: 'Asia/Seoul',
  })
  public format(date: Date | string, format: TDateFormat): string {
    if (typeof date === 'string') date = new Date(date)
    return DateManager.instance.intl_date.format(date, format)
  }
  public parse(date: Date | string): Map<string, string> {
    if (typeof date === 'string') date = new Date(date)
    return DateManager.instance.intl_date.parse(date)
  }

  public setDateConfig(config: IAppDateConfig) {
    DateManager.instance.intl_date = new DateManagerIntl(config.locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      weekday: 'short',
      timeZoneName: 'short',
      timeZone: config.timeZone,
    })
  }

  public generate(size: number): Date[] {
    const today = new Date()
    const currentDay = today.getDay()
    const sundayDate = new Date(today.setDate(today.getDate() - currentDay))

    return Array.from({ length: size }, (_, i) => {
      const currentDate = new Date(sundayDate)
      currentDate.setDate(sundayDate.getDate() + i)
      return currentDate
    })
  }
}
