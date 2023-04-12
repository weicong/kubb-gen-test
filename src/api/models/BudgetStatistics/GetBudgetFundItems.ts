import type { ListResultDtoOfFundItemDto } from "../ListResultDtoOfFundItemDto";

export type GetBudgetFundItemsQueryParams = {
    /**
    * @description 预算计划Id
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    /**
    * @description 包含政采项目
    * @type boolean | undefined
    */
    addProcurements?: boolean | undefined;
};

/**
* @description Success
*/
export type GetBudgetFundItemsResponse = ListResultDtoOfFundItemDto;
