import type { PagedResultDtoOfBudgetAllocationItemOrganizationUnitDto } from "../PagedResultDtoOfBudgetAllocationItemOrganizationUnitDto";

export type GetAllQueryParams = {
    /**
    * @type integer | undefined int64
    */
    budgetAllocationId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    budgetAllocationItemId?: number | undefined;
};

/**
* @description Success
*/
export type GetAllResponse = PagedResultDtoOfBudgetAllocationItemOrganizationUnitDto;
