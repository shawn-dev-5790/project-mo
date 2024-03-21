import { Dummy } from 'src/_core_/util/dummy/Dummy'

export class ReportFactory {
  generate() {
    return {
      id: Dummy.id(),
      name: Dummy.txt('name'),
      desc: Dummy.txt('desc'),
      status: Dummy.pickOne(['ON', 'OFF', 'DRAFT', 'READY', 'REMOVED']),
      tags: Array.from({ length: 3 }, (_, i) => Dummy.txt('tag' + i)),
      created_at: Dummy.date().toISOString(),
      updated_at: Dummy.date().toISOString(),
      deleted_at: null,
    }
  }
}
