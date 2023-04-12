import type { GetBudgetItemStatisticsDataInput } from "../GetBudgetItemStatisticsDataInput";
import type { FileDto } from "../FileDto";

export type ExportStatisticDataRequest = GetBudgetItemStatisticsDataInput;

/**
* @description Success
*/
export type ExportStatisticDataResponse = FileDto;
