import type { BudgetLevel } from "./BudgetLevel";

export type UpdateBudgetDto = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
    budgetLevel?: BudgetLevel | undefined;
    /**
    * @description 预算年度Id
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    /**
    * @description 科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 描述
    * @type string | undefined
    */
    description?: string | undefined;
};
