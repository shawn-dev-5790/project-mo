import { test, describe, expect } from 'vitest'
import DateManager from './DateManager'

describe('RequestManager', () => {
  test('should be a singleton class', () => {
    const DateManager1 = DateManager.getInstance()
    const DateManager2 = DateManager.getInstance()
    expect(DateManager1).toBe(DateManager2)
  })

  test('should throw an error when creating a new instance', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(() => new DateManager()).toThrowError('Singleton class. Use getInstance method.')
  })

  test('should format date', () => {
    expect(DateManager.getInstance().format(new Date('2024-09-05'), 'YYYY.MM.DD')).toBe('2024.09.05')
  })
})
