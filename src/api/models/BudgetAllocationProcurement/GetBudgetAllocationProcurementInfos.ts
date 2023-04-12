import type { ListResultDtoOfBudgetAllocationProcurementInfo } from "../ListResultDtoOfBudgetAllocationProcurementInfo";

export type GetBudgetAllocationProcurementInfosQueryParams = {
    /**
    * @type integer | undefined int64
    */
    ignorePurchaseApplyId?: number | undefined;
};

/**
* @description Success
*/
export type GetBudgetAllocationProcurementInfosResponse = ListResultDtoOfBudgetAllocationProcurementInfo;
