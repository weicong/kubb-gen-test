import type { RecordCountStatisticsData } from "../RecordCountStatisticsData";

export type GetRecordCountStatisticsQueryParams = {
    /**
    * @description 预算年度Id
    * @type integer int64
    */
    budgetPlanId: number;
    /**
    * @description 科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
};

/**
* @description Success
*/
export type GetRecordCountStatisticsResponse = RecordCountStatisticsData;
