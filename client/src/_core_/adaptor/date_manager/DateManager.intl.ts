import { TDateFormat } from './DateManager'

export default class DateManagerIntl {
  private instance: Intl.DateTimeFormat

  constructor(locale: string, config: Intl.DateTimeFormatOptions) {
    this.instance = new Intl.DateTimeFormat(locale, config)
  }

  public parse(date: Date): Map<string, string> {
    const partsMap = new Map<string, string>()
    this.instance.formatToParts(date).forEach(({ type, value }) => type !== 'literal' && partsMap.set(type, value))
    return partsMap
  }
  public format(date: Date, format: TDateFormat): string {
    const attr = this.parse(date)
    const formatMap: Record<TDateFormat, string> = {
      'YYYY.MM.DD': `${attr.get('year')}.${attr.get('month')}.${attr.get('day')}`,
    }
    return formatMap[format] || '-'
  }
}
