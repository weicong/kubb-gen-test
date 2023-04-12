import type { ListResultDtoOfBudgetItemDto } from "../ListResultDtoOfBudgetItemDto";

export type GetBudgetItemsQueryParams = {
    /**
    * @type integer | undefined int64
    */
    ignorePurchaseApplyId?: number | undefined;
};

/**
* @description Success
*/
export type GetBudgetItemsResponse = ListResultDtoOfBudgetItemDto;
