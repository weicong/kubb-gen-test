import type { BudgetItemExecutionQuarter } from "./BudgetItemExecutionQuarter";

export type BudgetItemExecutionQuarterEditDto = {
    executionQuarter?: BudgetItemExecutionQuarter | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
