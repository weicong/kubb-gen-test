import type { GetEditionTenantStatisticsOutput } from "../GetEditionTenantStatisticsOutput";

export type GetEditionTenantStatisticsQueryParams = {
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
export type GetEditionTenantStatisticsResponse = GetEditionTenantStatisticsOutput;
