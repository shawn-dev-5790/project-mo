import { Dummy } from 'src/_core_/util/dummy/Dummy'

export class AudienceFactory {
  generate() {
    return {
      id: Dummy.id(),
      type: Dummy.pickOne(['AUDIENCE-PRESET', 'CAMPAIGN-PRESET']),
      name: Dummy.txt('name'),
      desc: Dummy.txt('desc'),
      condition: 'some condition',
      count: 0,
    }
  }
}
