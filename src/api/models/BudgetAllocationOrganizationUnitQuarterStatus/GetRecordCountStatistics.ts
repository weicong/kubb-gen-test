import type { RecordCountStatisticsData } from "../RecordCountStatisticsData";

export type GetRecordCountStatisticsQueryParams = {
    /**
    * @type integer int64
    */
    budgetPlanId: number;
    /**
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
};

/**
* @description Success
*/
export type GetRecordCountStatisticsResponse = RecordCountStatisticsData;
