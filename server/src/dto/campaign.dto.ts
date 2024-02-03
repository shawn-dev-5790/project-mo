export class Campaign {
  id: string;
  channelId: string;
  title: string;
  desc: string;
  stat?: CampaignStat;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export class CampaignStat {
  impression_cnt: number;
  view_cnt: number;
  click_cnt: number;
  add_to_card_cnt: number;
  daily_order_cnt: number;
  cumulative_order_cnt: number;
  total_order_cnt: number;
  click_rate: number;
  visit_rate: number;
  open_rate: number;
}

export class CampaignOptions {
  lang: CampaignLanguage;
}

export class CampaignLanguage {
  click_rate: '클릭률';
  visit_rate: '방문률';
  open_rate: '오픈률';
}
