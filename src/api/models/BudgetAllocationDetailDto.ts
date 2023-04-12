import type { BudgetState } from "./BudgetState";
import type { BudgetType } from "./BudgetType";

export type BudgetAllocationDetailDto = {
    /**
    * @type integer | undefined int64
    */
    budgetAllocationId?: number | undefined;
    /**
    * @type string | undefined
    */
    budgetAllocationBudgetPlanYear?: string | undefined;
    /**
    * @type string | undefined
    */
    budgetAllocationFundAllocationCategoryName?: string | undefined;
    state?: BudgetState | undefined;
    "type"?: BudgetType | undefined;
    /**
    * @description 金额
    * @type number | undefined double
    */
    amount?: number | undefined;
    /**
    * @description 描述
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @description 描述
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
