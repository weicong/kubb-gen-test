import type { UpdateBudgetItemDto } from "../UpdateBudgetItemDto";
import type { BudgetItemDto } from "../BudgetItemDto";

export type UpdateRequest = UpdateBudgetItemDto;

/**
* @description Success
*/
export type UpdateResponse = BudgetItemDto;
