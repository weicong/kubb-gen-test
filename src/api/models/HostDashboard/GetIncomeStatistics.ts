import type { ChartDateInterval } from "../ChartDateInterval";
import type { GetIncomeStatisticsDataOutput } from "../GetIncomeStatisticsDataOutput";

export type GetIncomeStatisticsQueryParams = {
    incomeStatisticsDateInterval: ChartDateInterval;
    /**
    * @type string | undefined date-time
    */
    startDate?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    endDate?: string | undefined;
};

/**
* @description Success
*/
export type GetIncomeStatisticsResponse = GetIncomeStatisticsDataOutput;
