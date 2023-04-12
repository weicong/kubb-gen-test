import type { BudgetExecutionPlanItemEditDto } from "./BudgetExecutionPlanItemEditDto";

export type BudgetExecutionPlanItemSaveListInput = {
    /**
    * @description 用款计划审批单Id
    * @type integer | undefined int64
    */
    budgetExecutionPlanId?: number | undefined;
    /**
    * @description 科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: BudgetExecutionPlanItemEditDto[] | undefined;
};
