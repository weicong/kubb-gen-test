import type { CreateOrUpdateBudgetAllocationItemDto } from "../CreateOrUpdateBudgetAllocationItemDto";
import type { BudgetAllocationItemDto } from "../BudgetAllocationItemDto";

export type CreateRequest = CreateOrUpdateBudgetAllocationItemDto;

/**
* @description Success
*/
export type CreateResponse = BudgetAllocationItemDto;
