import type { GetBudgetItemStatisticsInput } from "../GetBudgetItemStatisticsInput";
import type { FileDto } from "../FileDto";

export type ExportAllInOneRequest = GetBudgetItemStatisticsInput;

/**
* @description Success
*/
export type ExportAllInOneResponse = FileDto;
