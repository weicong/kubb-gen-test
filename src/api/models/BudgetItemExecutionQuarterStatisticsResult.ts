import type { BudgetExecutionPlanDto } from "./BudgetExecutionPlanDto";
import type { BudgetItemExecutionQuarterStatistic } from "./BudgetItemExecutionQuarterStatistic";
import type { BudgetItemDto } from "./BudgetItemDto";

export type BudgetItemExecutionQuarterStatisticsResult = {
    budgetExecutionPlan?: BudgetExecutionPlanDto | undefined;
    /**
    * @description 非政采预算项季度用款情况
    * @type array | undefined
    */
    executionQuarterStatistics?: BudgetItemExecutionQuarterStatistic[] | undefined;
    /**
    * @description 政采预算项
    * @type array | undefined
    */
    budgetItemExecutionQuarterList?: BudgetItemDto[] | undefined;
};
