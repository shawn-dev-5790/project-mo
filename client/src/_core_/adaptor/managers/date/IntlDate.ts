import { AbsAppDate, TFormat, TParse } from './DateManager.abs'

/**
 * AbsDtrDate 인터페이스를 구현하는 IntlDate 클래스입니다.
 * 이 클래스는 날짜를 파싱하고 포맷팅하는 기능을 제공합니다.
 */
export default class IntlDate implements AbsAppDate {
  private locale: string
  private timezone: string
  public origin: Date

  /**
   * 새로운 IntlDate 인스턴스를 생성합니다.
   * @param {Object} params - IntlDate의 매개변수입니다.
   * @param {Date} params.date - 날짜입니다.
   * @param {string} params.timezone - 시간대입니다.
   * @param {string} params.locale - 로케일입니다.
   */
  constructor({ date, timezone, locale }: { date: Date; timezone: string; locale: string }) {
    this.timezone = timezone
    this.locale = locale
    this.origin = date
  }

  /**
   * Intl.DateTimeFormat의 옵션을 반환합니다.
   * @returns {Intl.DateTimeFormatOptions} 옵션입니다.
   */
  private get INTL_DATETIME_FORMAT_OPTIONS(): Intl.DateTimeFormatOptions {
    return {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
      timeZone: this.timezone,
    }
  }

  /**
   * 현지화된 요일 문자열을 반환합니다.
   * @returns {Record<string, string>} 요일 문자열입니다.
   */
  private getLocaleWeekday(): Record<string, string> {
    return {
      long: Intl.DateTimeFormat(this.locale, { weekday: 'long', timeZone: this.timezone }).format(this.origin),
      narrow: Intl.DateTimeFormat(this.locale, { weekday: 'narrow', timeZone: this.timezone }).format(this.origin),
      short: Intl.DateTimeFormat(this.locale, { weekday: 'short', timeZone: this.timezone }).format(this.origin),
    }
  }

  /**
   * 현지화된 월 문자열을 반환합니다.
   * @returns {Record<string, string>} 월 문자열입니다.
   */
  private getLocaleMonth(): Record<string, string> {
    return {
      long: Intl.DateTimeFormat(this.locale, { month: 'long', timeZone: this.timezone }).format(this.origin),
      narrow: Intl.DateTimeFormat(this.locale, { month: 'narrow', timeZone: this.timezone }).format(this.origin),
      short: Intl.DateTimeFormat(this.locale, { month: 'short', timeZone: this.timezone }).format(this.origin),
    }
  }

  /**
   * 날짜를 파싱하여 다양한 형식의 문자열로 반환합니다.
   * @returns {Record<TParse, string>} 파싱된 날짜 문자열입니다.
   */
  parse(): Record<TParse, string> {
    const weekday = this.getLocaleWeekday()
    const month = this.getLocaleMonth()
    const dateRecord: Record<TParse, string> = {
      locale: this.locale,
      localeMonthLong: month.long,
      localeMonthNarrow: month.narrow,
      localeMonthShort: month.short,
      localeWeekdayLong: weekday.long,
      localeWeekdayNarrow: weekday.narrow,
      localeWeekdayShort: weekday.short,
      timezone: this.timezone,
      timezoneName: '',
      year: '',
      month: '',
      day: '',
      hour: '',
      minute: '',
      second: '',
    }
    Intl.DateTimeFormat(this.locale, this.INTL_DATETIME_FORMAT_OPTIONS)
      .formatToParts(this.origin)
      .filter(({ type }) => ['year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName'].includes(type))
      .forEach(({ type, value }) => {
        /**
         * README: FIXME: It seems to be a bug in the built-in api,
         * it should return two digits for 2-digit, but in some cases it returns one digit.
         * To solve this, use padStart to make it two digits.
         */
        switch (type) {
          case 'timeZoneName':
            dateRecord['timezoneName'] = value
            break
          case 'minute': // bug case for minute
            dateRecord['minute'] = value.padStart(2, '0')
            break
          case 'second': // bug case for second
            dateRecord['second'] = value.padStart(2, '0')
            break
          default:
            dateRecord[type as TParse] = value
        }
      })

    return dateRecord
  }

  /**
   * 파싱된 날짜를 특정 형식으로 포맷팅합니다.
   * @returns {Record<TFormat, string>} 포맷팅된 날짜 문자열입니다.
   */
  format(): Record<TFormat, string> {
    const { year, month, day, hour, minute, second, timezoneName, localeMonthShort, localeWeekdayLong } = this.parse()
    // prettier-ignore
    return {
        'HH:mm':                   `${hour}:${minute}`,
        'MMM dd, yyyy EEE HH:mm O':`${localeMonthShort} ${day}, ${year} ${localeWeekdayLong} ${hour}:${minute} (${timezoneName})`,
        'MMM dd, yyyy HH:mm':      `${localeMonthShort} ${day}, ${year} ${hour}:${minute}`,
        'MMM dd, yyyy':            `${localeMonthShort} ${day}, ${year}`,
        'yyyy-MM-dd':              `${year}-${month}-${day}`,
        'yyyy.MM.dd':              `${year}.${month}.${day}`,
        'yyyy.MM.dd HH:mm':        `${year}.${month}.${day} ${hour}:${minute}`,
        'yyyy.MM.dd EEE HH:mm:ss': `${year}.${month}.${day} ${localeWeekdayLong} ${hour}:${minute}:${second}`,
    }
  }
}
