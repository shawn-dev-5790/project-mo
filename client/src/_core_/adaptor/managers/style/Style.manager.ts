class StyleManager {
  private static readonly instance: StyleManager = new StyleManager()
  private constructor() {
    if (StyleManager.instance) throw new Error('싱글톤 클래스입니다. getInstance 메소드를 사용하세요')
  }
  public static getInstance(): StyleManager {
    return StyleManager.instance
  }
  public merge(...args: string[]): string {
    return Array.from(new Set(args)).join(' ')
  }
}

export default StyleManager.getInstance()
