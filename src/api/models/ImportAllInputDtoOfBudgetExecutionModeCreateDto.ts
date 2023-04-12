import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { BudgetExecutionModeCreateDto } from "./BudgetExecutionModeCreateDto";

export type ImportAllInputDtoOfBudgetExecutionModeCreateDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: BudgetExecutionModeCreateDto | undefined;
};
