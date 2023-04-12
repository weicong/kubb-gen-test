import type { BudgetAllocationItemOrganizationUnitDto } from "../BudgetAllocationItemOrganizationUnitDto";

export type GetQueryParams = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};

/**
* @description Success
*/
export type GetResponse = BudgetAllocationItemOrganizationUnitDto;