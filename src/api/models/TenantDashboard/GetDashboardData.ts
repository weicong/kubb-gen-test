import type { SalesSummaryDatePeriod } from "../SalesSummaryDatePeriod";
import type { GetDashboardDataOutput } from "../GetDashboardDataOutput";

export type GetDashboardDataQueryParams = {
    salesSummaryDatePeriod: SalesSummaryDatePeriod;
};

/**
* @description Success
*/
export type GetDashboardDataResponse = GetDashboardDataOutput;
