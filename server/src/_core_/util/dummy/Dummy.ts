import { v4 as uuidv4 } from 'uuid'
export class Dummy {
  static id() {
    return uuidv4()
  }

  static txt(prefix: string) {
    return prefix + 'txt-1'
  }
  static img() {
    return 'https://i.pinimg.com/564x/b5/e2/54/b5e254e54d58469dd56334c1334c29cf.jpg'
  }

  static int(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  static float(min: number, max: number, fixed: number) {
    return (Math.floor(Math.random() * (max - min + 1)) + min) * (fixed || 0.01)
  }

  static date() {
    return new Date()
  }

  static pickOne(arr: any[]) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  static pickSome(arr: any[], size: number) {
    if (size > arr.length - 1) return arr

    return arr.sort(() => 0.5 - Math.random()).slice(0, size)
  }
}
