import type { BudgetExecutionModeDto } from "./BudgetExecutionModeDto";
import type { BudgetItemStatistic } from "./BudgetItemStatistic";

export type GetBudgetItemStatisticsOutput = {
    /**
    * @type array | undefined
    */
    budgetExecutionModes?: BudgetExecutionModeDto[] | undefined;
    /**
    * @type array | undefined
    */
    items?: BudgetItemStatistic[] | undefined;
};
