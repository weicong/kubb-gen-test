import type { PagedResultDtoOfBudgetAllocationItemDto } from "../PagedResultDtoOfBudgetAllocationItemDto";

export type GetAllQueryParams = {
    /**
    * @type integer int64
    */
    budgetAllocationId: number;
};

/**
* @description Success
*/
export type GetAllResponse = PagedResultDtoOfBudgetAllocationItemDto;
