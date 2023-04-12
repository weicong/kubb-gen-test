import type { BudgetPlanInfo } from "./BudgetPlanInfo";

export type BudgetInfo = {
    budgetPlan?: BudgetPlanInfo | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
