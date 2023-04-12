import type { GetSeniorUserStatisticsOutput } from "../GetSeniorUserStatisticsOutput";

export type GetSeniorUserStatisticsQueryParams = {
    /**
    * @description 批次Id
    * @type integer int64
    */
    salaryBatchId: number;
};

/**
* @description Success
*/
export type GetSeniorUserStatisticsResponse = GetSeniorUserStatisticsOutput;
