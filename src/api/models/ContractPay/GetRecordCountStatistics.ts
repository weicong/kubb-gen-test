import type { RecordCountStatisticsData } from "../RecordCountStatisticsData";

export type GetRecordCountStatisticsQueryParams = {
    /**
    * @description 合同Id
    * @type integer | undefined int64
    */
    contractId?: number | undefined;
};

/**
* @description Success
*/
export type GetRecordCountStatisticsResponse = RecordCountStatisticsData;
