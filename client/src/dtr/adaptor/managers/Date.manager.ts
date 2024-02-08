class DateManager {
  private locale: string = this.SUPPORT_LOCALE.korea
  private timeZone: string = this.SUPPORT_TIME_ZONE.korea
  private static readonly instance: DateManager = new DateManager()

  /**
   * DateManager 생성자입니다.
   * 싱글톤 패턴을 사용하므로, 직접 인스턴스를 생성하는 대신 getInstance 메소드를 사용해야 합니다.
   */
  private constructor() {
    if (DateManager.instance) {
      throw new Error('싱글톤 클래스입니다. getInstance 메소드를 사용하세요')
    }
  }

  /**
   * DateManager 인스턴스를 반환합니다.
   * @returns {DateManager} DateManager 인스턴스
   */
  public static getInstance(): DateManager {
    return DateManager.instance
  }
  /**
   * 지원하는 로케일을 반환합니다.
   * @private
   * @returns {Object} 지원하는 로케일
   */
  private get SUPPORT_LOCALE() {
    return {
      korea: 'ko-KR',
      japan: 'ja-JP',
      us: 'en-US',
    }
  }

  /**
   * 지원하는 시간대를 반환합니다.
   * @private
   * @returns {Object} 지원하는 시간대
   */
  private get SUPPORT_TIME_ZONE() {
    return {
      korea: 'Asia/Seoul', // 한국 (서울)
      japan: 'Asia/Tokyo', // 일본 (도쿄)
      us_est: 'America/New_York', // 미국 동부 (뉴욕)
      us_cst: 'America/Chicago', // 미국 중부 (시카고)
      us_mst: 'America/Denver', // 미국 산지 (덴버)
      us_pst: 'America/Los_Angeles', // 미국 서부 (로스앤젤레스)
    }
  }

  /**
   * 로케일을 설정합니다.
   * @public
   * @param {string} locale - 설정할 로케일
   * @returns {DateManager} DateManager 인스턴스
   */
  public setLocale(locale: keyof typeof this.SUPPORT_LOCALE) {
    if (this.SUPPORT_LOCALE[locale]) this.locale = this.SUPPORT_LOCALE[locale]
    return this
  }

  /**
   * 시간대를 설정합니다.
   * @public
   * @param {string} timeZone - 설정할 시간대
   * @returns {DateManager} DateManager 인스턴스
   */
  public setTimeZone(timeZone: keyof typeof this.SUPPORT_TIME_ZONE) {
    if (this.SUPPORT_TIME_ZONE[timeZone]) this.timeZone = this.SUPPORT_TIME_ZONE[timeZone]
    return this
  }

  /**
   * 주어진 날짜의 요일을 반환합니다.
   * @private
   * @param {Date} date - 요일을 가져올 날짜
   * @returns {Object} 요일 정보
   */
  private getWeekday(date: Date) {
    return {
      long: Intl.DateTimeFormat(this.locale, { weekday: 'long', timeZone: this.timeZone }).format(date),
      narrow: Intl.DateTimeFormat(this.locale, { weekday: 'narrow', timeZone: this.timeZone }).format(date),
      short: Intl.DateTimeFormat(this.locale, { weekday: 'short', timeZone: this.timeZone }).format(date),
    }
  }

  /**
   * 주어진 날짜의 월을 반환합니다.
   * @private
   * @param {Date} date - 월을 가져올 날짜
   * @returns {Object} 월 정보
   */
  private getMonth(date: Date) {
    return {
      digit: Intl.DateTimeFormat(this.locale, { month: '2-digit', day: '2-digit', timeZone: this.timeZone })
        .format(date)
        .slice(0, 2),
    }
  }
  /**
   * 주어진 날짜를 분석하여 다양한 형태로 반환합니다.
   * @public
   * @param {Date} date - 분석할 날짜
   * @returns {Object} 분석된 날짜 정보
   */
  public parse(date: Date) {
    const config: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
      timeZone: this.timeZone,
    }
    const [month, day, year, time, timeZoneName] = new Intl.DateTimeFormat(this.SUPPORT_LOCALE.us, config)
      .format(date)
      .split(' ')
      .map((attr) => attr.trim().replace(',', ''))
    const [hour, minute, second] = time.split(':')
    const localeWeekday = this.getWeekday(date)
    const localeMonth = this.getMonth(date)

    return {
      year,
      month,
      day,
      time,
      locale: this.locale,
      timeZone: this.timeZone,
      timeZoneName,
      hour,
      minute,
      second,
      localeWeekday,
      localeMonth,
    }
  }

  /**
   * 주어진 날짜를 다양한 형식으로 포맷팅합니다.
   * @public
   * @param {Date} date - 포맷팅할 날짜
   * @returns {Object} 포맷팅된 날짜 문자열
   */
  public format(date: Date) {
    const { year, month, day, localeWeekday, localeMonth, timeZoneName, hour, minute, second } = this.parse(date)
    // prettier-ignore
    return {
        ['HH:mm']:                            `${hour}:${minute}`,
        ['Month dd, yyyy Weekday HH:mm TZ']:  `${month} ${day}, ${year} ${localeWeekday.long} ${hour}:${minute} (${timeZoneName})`,
        ['Month dd, yyyy HH:mm']:             `${month} ${day}, ${year} ${hour}:${minute}`,
        ['Month dd, yyyy']:                   `${month} ${day}, ${year}`,
        ['yyyy-MM-dd']:                       `${year}-${localeMonth.digit}-${day}`,
        ['yyyy.MM.dd']:                       `${year}.${localeMonth.digit}.${day}`,
        ['yyyy.MM.dd HH:mm']:                 `${year}.${localeMonth.digit}.${day} ${hour}:${minute}`,
        ['yyyy.MM.dd Weekday HH:mm']:         `${year}.${localeMonth.digit}.${day} ${localeWeekday.long} ${hour}:${minute}:${second}`,
    }
  }
}

export default DateManager.getInstance()
