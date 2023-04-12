import type { PagedResultDtoOfBudgetAllocationOrganizationUnitQuarterStatusDto } from "../PagedResultDtoOfBudgetAllocationOrganizationUnitQuarterStatusDto";

export type GetAllQueryParams = {
    /**
    * @type integer int64
    */
    budgetPlanId: number;
    /**
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
};

/**
* @description Success
*/
export type GetAllResponse = PagedResultDtoOfBudgetAllocationOrganizationUnitQuarterStatusDto;
