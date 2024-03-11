import { SiteCampaignRes } from './site_campaign.dto'

export class SiteCampaignFactory {
  generate(
    event: SiteCampaignRes['data']['event'], // 캠페인을 발동 시키는 트리거 이벤트
    site: SiteCampaignRes['data']['site'], // 사이트 정보
    campaign: SiteCampaignRes['data']['campaign'], // 캠페인 정보
    stat: SiteCampaignRes['data']['stat'], // 캠페인 통계 지표
    report: SiteCampaignRes['data']['report'], // 캠페인의 근거 리포트
    schedule: SiteCampaignRes['data']['schedule'], // 캠페인 발송|발동 주기
    audience: SiteCampaignRes['data']['audience'], // 캠페인이 타겟팅 하는 오디언스(대상자)
    creatives: SiteCampaignRes['data']['creatives'], // 캠페인으로 동작하는 소재목록
  ) {
    return {
      event,
      site,
      campaign,
      stat,
      report,
      schedule,
      audience,
      creatives,
      setting: {
        card: true,
        email: true,
        lms: true,
        firendtalk: true,
        alimtalk: true,
        banner: true,
        site: true,
        user: true,
      },
    }
  }
}
