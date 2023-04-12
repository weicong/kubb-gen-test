import type { CreateBudgetPlanDto } from "../CreateBudgetPlanDto";
import type { BudgetPlanDto } from "../BudgetPlanDto";

export type CreateRequest = CreateBudgetPlanDto;

/**
* @description Success
*/
export type CreateResponse = BudgetPlanDto;
