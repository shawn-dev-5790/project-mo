import { Dummy } from 'src/_core_/util/dummy/Dummy'

export class CreativeFactory {
  generate() {
    return {
      id: Dummy.id(),
      type: Dummy.pickOne(['IMAGE', 'VIDEO', 'TEXT', 'HTML']),
      name: Dummy.txt('name'),
      desc: Dummy.txt('desc'),
      created_at: Dummy.date().toISOString(),
      updated_at: Dummy.date().toISOString(),
      deleted_at: null,
    }
  }
}
