import type { ListResultDtoOfFundItemAndBudgetAllocationItemDto } from "../ListResultDtoOfFundItemAndBudgetAllocationItemDto";

export type GetAllFundItemAndBudgetAllocationItemsQueryParams = {
    /**
    * @type integer int64
    */
    budgetAllocationId: number;
};

/**
* @description Success
*/
export type GetAllFundItemAndBudgetAllocationItemsResponse = ListResultDtoOfFundItemAndBudgetAllocationItemDto;
