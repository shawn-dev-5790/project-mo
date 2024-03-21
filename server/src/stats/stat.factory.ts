import { Dummy } from 'src/_core_/util/dummy/Dummy'

export class StatFactory {
  generate() {
    return {
      id: Dummy.id(),
      goal_type: Dummy.pickOne(['VIEW_CNT', 'VISIT_CNT', 'CVR']),
      goal_unit: Dummy.pickOne(['KRW', 'JPY', 'USD']),
      goal_value: String(Dummy.float(100, 1000, 0.01)),
    }
  }
}
