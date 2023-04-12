import type { CreateBudgetDto } from "../CreateBudgetDto";
import type { BudgetDto } from "../BudgetDto";

export type CreateRequest = CreateBudgetDto;

/**
* @description Success
*/
export type CreateResponse = BudgetDto;
