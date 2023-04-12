import type { BudgetState } from "../BudgetState";
import type { PagedResultDtoOfBudgetAllocationDetailDto } from "../PagedResultDtoOfBudgetAllocationDetailDto";

export type GetAllQueryParams = {
    /**
    * @type integer | undefined int64
    */
    budgetAllocationId?: number | undefined;
    state?: BudgetState | undefined;
    /**
    * @type string | undefined
    */
    sorting?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    skipCount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    maxResultCount?: number | undefined;
};

/**
* @description Success
*/
export type GetAllResponse = PagedResultDtoOfBudgetAllocationDetailDto;
