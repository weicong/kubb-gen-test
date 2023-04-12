import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { BudgetExecutionPlanCreateDto } from "./BudgetExecutionPlanCreateDto";

export type ImportAllInputDtoOfBudgetExecutionPlanCreateDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: BudgetExecutionPlanCreateDto | undefined;
};
