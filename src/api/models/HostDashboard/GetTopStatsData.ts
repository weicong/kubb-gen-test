import type { TopStatsData } from "../TopStatsData";

export type GetTopStatsDataQueryParams = {
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
export type GetTopStatsDataResponse = TopStatsData;
