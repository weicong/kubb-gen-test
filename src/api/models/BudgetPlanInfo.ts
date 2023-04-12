import type { BudgetPlanStatus } from "./BudgetPlanStatus";

export type BudgetPlanInfo = {
    /**
    * @description 年度
    * @type integer | undefined int32
    */
    year?: number | undefined;
    status?: BudgetPlanStatus | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
