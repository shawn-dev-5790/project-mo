export class SiteCampaignRes {
  code: string
  message: string
  data: {
    // validate
    setting: {
      card: boolean
      email: boolean
      lms: boolean
      firendtalk: boolean
      alimtalk: boolean
      banner: boolean
      site: boolean
      user: boolean
    }
    // how
    campaign: {
      id: string
      name: string
      desc: string
      status: string
      channel_type: string
      campaign_type: string
      created_at: string
      updated_at: string
      deleted_at: string
    }
    // where
    site: {
      id: string
      name: string
      hostname: string
      hostname_url: string
      status: string
      platform: string
      user_type: string
      created_at: string
      updated_at: string
      deleted_at: string
    }
    // why
    event: {
      id: string
      tpye: string
      name: string
      cont: string
      created_at: string
      updated_at: string
      deleted_at: string
    }
    // why
    stat: {
      id: string
      goal_type: string
      goal_unit: string
      goal_value: number
    }
    // why
    report: {
      id: string
      name: string
      desc: string
      status: string
      tags: string[]
      created_at: string
      updated_at: string
      deleted_at: string
    }
    // when
    schedule: {
      id: string
      type: string
      start_at: string
      end_at: string
      send_at: string
      default_time: string
      weekday_interval: number[]
      is_duplicated: boolean
    }
    // who
    audience: {
      id: string
      type: string
      name: string
      desc: string
      condition: string
      count: number
    }
    // what
    creatives: [
      {
        id: string
        type: string
        name: string
        desc: string
        created_at: string
        updated_at: string
        deleted_at: string
      },
    ]
  }
}
