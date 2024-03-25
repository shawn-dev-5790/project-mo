import DateManager from './DateManager'

export const useAppDateManager = () => {
  DateManager.getInstance().setDateConfig({
    locale: 'en-US',
    timeZone: 'Asia/Seoul',
  })

  return DateManager.getInstance()
}
