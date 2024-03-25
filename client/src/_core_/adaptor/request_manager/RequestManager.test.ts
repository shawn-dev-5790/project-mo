import { test, describe, expect } from 'vitest'
import RequestManager from './RequestManager'

describe('RequestManager', () => {
  test('should be a singleton class', () => {
    const requestManager1 = RequestManager.getInstance()
    const requestManager2 = RequestManager.getInstance()
    expect(requestManager1).toBe(requestManager2)
  })

  test('should throw an error when creating a new instance', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(() => new RequestManager()).toThrowError('Singleton class. Use getInstance method.')
  })
})
