import type { ListResultDtoOfBudgetAllocationItemOrganizationUnitDto } from "../ListResultDtoOfBudgetAllocationItemOrganizationUnitDto";

export type GetAllWithAllOrganizationUnitsQueryParams = {
    /**
    * @type integer | undefined int64
    */
    budgetAllocationItemId?: number | undefined;
};

/**
* @description Success
*/
export type GetAllWithAllOrganizationUnitsResponse = ListResultDtoOfBudgetAllocationItemOrganizationUnitDto;
