export interface IEventEntity {
  id: string
  tpye: string
  name: string
  cont: string
  created_at: string
  updated_at: string
  deleted_at: string
}

export default class EventEntity {
  constructor(public data: IEventEntity) {}

  toJSON(): IEventEntity {
    return this.data
  }
  validate(): boolean {
    return true
  }
}
