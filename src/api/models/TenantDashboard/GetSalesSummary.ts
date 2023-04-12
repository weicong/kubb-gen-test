import type { SalesSummaryDatePeriod } from "../SalesSummaryDatePeriod";
import type { GetSalesSummaryOutput } from "../GetSalesSummaryOutput";

export type GetSalesSummaryQueryParams = {
    salesSummaryDatePeriod: SalesSummaryDatePeriod;
};

/**
* @description Success
*/
export type GetSalesSummaryResponse = GetSalesSummaryOutput;
