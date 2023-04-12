import type { BudgetItemExecutionQuarterStatisticsResult } from "../BudgetItemExecutionQuarterStatisticsResult";

export type GetExecutionQuarterStatisticsQueryParams = {
    /**
    * @type integer | undefined int64
    */
    budgetExecutionPlanId?: number | undefined;
};

/**
* @description Success
*/
export type GetExecutionQuarterStatisticsResponse = BudgetItemExecutionQuarterStatisticsResult;
