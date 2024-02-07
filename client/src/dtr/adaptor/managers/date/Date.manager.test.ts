import { describe, expect, test } from 'vitest'
import DateManager from './Date.manager'

// DateManager에 대한 테스트 스위트
describe('DateManager', () => {
  // format 메소드에 대한 테스트 스위트
  describe('format', () => {
    // 한국 시간대와 로케일에 대한 날짜 포맷팅 테스트
    test('should correctly format the date for korea timezone, korea locale', () => {
      const date = new Date(2022, 1, 1, 13, 30, 15) // February 1, 2022 at 13:30:15
      const formatted = DateManager.setLocale('korea').setTimeZone('korea').format(date)

      // 다양한 포맷에 대한 기대값 검증
      expect(formatted['HH:mm']).toBe('13:30')
      expect(formatted['month dd, yyyy Weekday HH:mm TZ']).toBe('Feb 01, 2022 화요일 13:30 (GMT+9)')
      expect(formatted['month dd, yyyy HH:mm']).toBe('Feb 01, 2022 13:30')
      expect(formatted['month dd, yyyy']).toBe('Feb 01, 2022')
      expect(formatted['yyyy-MM-dd']).toBe('2022-02-01')
      expect(formatted['yyyy.MM.dd']).toBe('2022.02.01')
      expect(formatted['yyyy.MM.dd HH:mm']).toBe('2022.02.01 13:30')
      expect(formatted['yyyy.MM.dd Weekday HH:mm']).toBe('2022.02.01 화요일 13:30:15')
    })

    // 미국 동부 시간대와 로케일에 대한 날짜 포맷팅 테스트
    test('should correctly format the date for us_est timezone, us locale', () => {
      const date = new Date(2022, 1, 1, 13, 30, 15) // February 1, 2022 at 13:30:15
      const formatted = DateManager.setLocale('us').setTimeZone('us_est').format(date)

      // 다양한 포맷에 대한 기대값 검증
      expect(formatted['HH:mm']).toBe('13:30')
      expect(formatted['month dd, yyyy Weekday HH:mm TZ']).toBe('Feb 01, 2022 Tuesday 13:30 (GMT+9)')
      expect(formatted['month dd, yyyy HH:mm']).toBe('Feb 01, 2022 13:30')
      expect(formatted['month dd, yyyy']).toBe('Feb 01, 2022')
      expect(formatted['yyyy-MM-dd']).toBe('2022-02-01')
      expect(formatted['yyyy.MM.dd']).toBe('2022.02.01')
      expect(formatted['yyyy.MM.dd HH:mm']).toBe('2022.02.01 13:30')
      expect(formatted['yyyy.MM.dd Weekday HH:mm']).toBe('2022.02.01 Tuesday 13:30:15')
    })
  })
})
