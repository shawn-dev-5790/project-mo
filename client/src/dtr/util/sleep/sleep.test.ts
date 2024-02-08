import { describe, expect, test } from 'vitest'
import { sleep } from './sleep'

describe('sleep function', () => {
  test('should return the same data after the specified time', async () => {
    const data = 'test data'
    const ms = 1000
    const startTime = Date.now()
    const result = await sleep(ms, data)
    const endTime = Date.now()
    const elapsedTime = endTime - startTime
    // 반환된 데이터가 입력한 데이터와 동일한지 확인
    expect(result).toBe(data)
    // 실제 대기 시간이 입력한 시간과 유사한지 확인 (약간의 오차를 고려)
    expect(elapsedTime).toBeGreaterThanOrEqual(ms)
    expect(elapsedTime).toBeLessThan(ms + 100)
  })
})
