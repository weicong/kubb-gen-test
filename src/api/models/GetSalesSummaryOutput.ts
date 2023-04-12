import type { SalesSummaryData } from "./SalesSummaryData";

export type GetSalesSummaryOutput = {
    /**
    * @type integer | undefined int32
    */
    totalSales?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    revenue?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    expenses?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    growth?: number | undefined;
    /**
    * @type array | undefined
    */
    salesSummary?: SalesSummaryData[] | undefined;
};
