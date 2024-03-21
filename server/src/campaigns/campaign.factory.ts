import { Dummy } from 'src/_core_/util/dummy/Dummy'

export class CampaignFactory {
  generate() {
    return {
      id: Dummy.id(),
      name: Dummy.txt('name'),
      desc: Dummy.txt('desc'),
      status: Dummy.pickOne(['ON', 'OFF', 'DRAFT', 'READY', 'REMOVED']),
      channel_type: Dummy.pickOne(['EMAIL', 'SMS', 'PUSH', 'DM']),
      campaign_type: Dummy.pickOne(['BULK', 'AUTOMATION', 'TRIGGER']),
      created_at: Dummy.date().toISOString(),
      updated_at: Dummy.date().toISOString(),
      deleted_at: null,
    }
  }
}
