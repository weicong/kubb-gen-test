import type { CreateBudgetItemDto } from "../CreateBudgetItemDto";
import type { BudgetItemDto } from "../BudgetItemDto";

export type CreateRequest = CreateBudgetItemDto;

/**
* @description Success
*/
export type CreateResponse = BudgetItemDto;
