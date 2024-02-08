/**
 * 주어진 시간(ms) 동안 대기한 후, 주어진 데이터를 반환하는 함수입니다.
 *
 * @export
 * @template T - 반환할 데이터의 타입
 * @param {number} ms - 대기할 시간 (밀리초 단위)
 * @param {T} data - 반환할 데이터
 * @returns {Promise<T>} - 대기 시간 후 반환할 데이터를 포함하는 Promise
 */
export const sleep = async <T>(ms: number, data: T): Promise<T> => {
  const timer = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
  await timer(ms)
  return data
}
