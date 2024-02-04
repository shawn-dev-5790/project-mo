import NetworkManager from "../Network.manager";

/**
 * reqGetCampaign 함수는 주어진 캠페인 ID에 대한 정보를 가져오는 요청을 생성합니다.
 * @param {IReqGetCampaign["path"]["campaignId"]} campaignId - 가져올 캠페인의 ID
 * @returns {Promise} 캠페인 정보를 가져오는 요청의 Promise
 */
const reqGetCampaign = (campaignId: IReqGetCampaign["path"]["campaignId"]) => {
  return NetworkManager.request<IReqGetCampaign, IResGetCampaign>({
    method: "GET",
    url: `/campaigns/${campaignId}`,
  });
};

export default reqGetCampaign;

/**
 * IReqGetCampaign 인터페이스는 캠페인 정보를 가져오는 요청의 형식을 정의합니다.
 */
export interface IReqGetCampaign {
  url: "/campaigns/:campaignId" | string;
  path: {
    campaignId: string;
  };
}

/**
 * IResGetCampaign 인터페이스는 캠페인 정보를 가져오는 응답의 형식을 정의합니다.
 */
export interface IResGetCampaign {
  code: string;
  message: string;
  data: {
    campaign: {
      id: string;
      name: string;
      description: string;
      status: string;
      start_date: string;
      end_date: string;
      created_at: string;
      updated_at: string;
      deleted_at: string;
    };
  };
}
