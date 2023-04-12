import type { BudgetPlanStatus } from "../BudgetPlanStatus";
import type { PagedResultDtoOfBudgetPlanDto } from "../PagedResultDtoOfBudgetPlanDto";

export type GetAllQueryParams = {
    /**
    * @description 年度
    * @type integer | undefined int32
    */
    year?: number | undefined;
    status?: BudgetPlanStatus | undefined;
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
export type GetAllResponse = PagedResultDtoOfBudgetPlanDto;
