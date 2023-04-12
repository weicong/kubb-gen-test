export type BudgetExecutionPlanListRequestDto = {
    /**
    * @description 预算年度Id
    * @type integer int64
    */
    budgetPlanId: number;
    /**
    * @description 科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
};
