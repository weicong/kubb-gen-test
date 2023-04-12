import type { PagedResultDtoOfBudgetAllocationDto } from "../PagedResultDtoOfBudgetAllocationDto";

export type GetAllQueryParams = {
    /**
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
};

/**
* @description Success
*/
export type GetAllResponse = PagedResultDtoOfBudgetAllocationDto;
