import type { SalesSummaryData } from "./SalesSummaryData";

export type GetDashboardDataOutput = {
    /**
    * @type integer | undefined int32
    */
    totalProfit?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    newFeedbacks?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    newOrders?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    newUsers?: number | undefined;
    /**
    * @type array | undefined
    */
    salesSummary?: SalesSummaryData[] | undefined;
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
    * @type integer | undefined int32
    */
    transactionPercent?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    newVisitPercent?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    bouncePercent?: number | undefined;
    /**
    * @type array | undefined
    */
    dailySales?: number[] | undefined;
    /**
    * @type array | undefined
    */
    profitShares?: number[] | undefined;
};
