import { AbsDateManager, AbsAppDate, TFormat, TParse } from './DateManager.abs'
import IntlDate from './IntlDate'

/**
 * DtrDateManager 클래스는 날짜를 관리하는 클래스입니다.
 * 이 클래스는 싱글톤 패턴을 사용하며, getInstance 메서드를 통해 인스턴스를 얻을 수 있습니다.
 */
export default class DateManager implements AbsDateManager {
  private static readonly instance: DateManager = new DateManager()
  public locale: string = DateManager.SUPPORT_LOCALE.en
  public timezone: string = DateManager.SUPPORT_TIMEZONE.us_est

  private constructor() {
    if (DateManager.instance) throw new Error('This is a singleton class. Use the getInstance method.')
  }

  /**
   * 싱글톤 인스턴스를 반환합니다.
   * @returns {DtrDateManager} DtrDateManager의 싱글톤 인스턴스
   */
  static getInstance(): DateManager {
    return DateManager.instance
  }

  // constants
  static get SUPPORT_LOCALE(): Record<string, string> {
    return {
      ko: 'ko-KR',
      ja: 'ja-JP',
      en: 'en-US',
    }
  }
  static get SUPPORT_TIMEZONE(): Record<string, string> {
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
   * @param {string} locale - 설정할 로케일
   */
  setLocale(locale: string): void {
    if (!DateManager.SUPPORT_LOCALE[locale]) return
    this.locale = locale
  }

  /**
   * 타임존을 설정합니다.
   * @param {string} timezone - 설정할 타임존
   */
  setTimezone(timezone: string): void {
    if (!DateManager.SUPPORT_TIMEZONE[timezone]) return
    this.timezone = timezone
  }

  /**
   * 날짜를 인코딩합니다.
   * @param {Date | string} date - 인코딩할 날짜
   * @returns {AbsDtrDate} 인코딩된 날짜
   */
  encode(date: Date | string): AbsAppDate {
    // 1. date가 문자열이라면 Date 객체로 변환한다.
    if (typeof date === 'string') date = new Date(date)
    // 2. IntlDate 인스턴스를 반환한다.
    return new IntlDate({ date, timezone: this.timezone, locale: this.locale })
  }

  /**
   * 날짜를 디코딩합니다.
   * @param {AbsDtrDate} date - 디코딩할 날짜
   * @returns {Date} 디코딩된 날짜
   */
  decode(date: AbsAppDate): Date {
    // 1. date가 AbsDtrDate 타입이 아니라면 에러를 발생시킨다.
    if (!(date instanceof AbsAppDate)) throw new Error('Invalid date type. use DtrDate type.')
    // 2. date의 origin을 반환한다.
    return date.origin
  }

  /**
   * 날짜를 파싱합니다.
   * @param {Date | string} date - 파싱할 날짜
   * @returns {Record<TParse, string>} 파싱된 날짜
   */
  parse(date: Date | string): Record<TParse, string> {
    return this.encode(date).parse()
  }

  /**
   * 날짜를 포맷팅합니다.
   * @param {Date | string} date - 포맷팅할 날짜
   * @returns {Record<TFormat, string>} 포맷팅된 날짜
   */
  format(date: Date | string): Record<TFormat, string> {
    return this.encode(date).format()
  }
}

export const appDateManager = DateManager.getInstance()
