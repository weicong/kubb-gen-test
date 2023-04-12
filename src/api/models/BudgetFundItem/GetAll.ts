import type { FundItemType } from "../FundItemType";
import type { PagedResultDtoOfBudgetFundItemDto } from "../PagedResultDtoOfBudgetFundItemDto";

export type GetAllQueryParams = {
    /**
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    fundItemType: FundItemType;
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
export type GetAllResponse = PagedResultDtoOfBudgetFundItemDto;
