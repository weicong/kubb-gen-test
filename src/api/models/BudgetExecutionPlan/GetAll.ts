import type { PagedResultDtoOfBudgetExecutionPlanDto } from "../PagedResultDtoOfBudgetExecutionPlanDto";

export type GetAllQueryParams = {
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

/**
* @description Success
*/
export type GetAllResponse = PagedResultDtoOfBudgetExecutionPlanDto;
