import type { BudgetState } from "../BudgetState";
import type { PagedResultDtoOfBudgetAllocationProcurementItemDto } from "../PagedResultDtoOfBudgetAllocationProcurementItemDto";

export type GetAllQueryParams = {
    /**
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    budgetAllocationId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    budgetAllocationProcurementId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
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
export type GetAllResponse = PagedResultDtoOfBudgetAllocationProcurementItemDto;
