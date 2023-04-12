import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { BudgetAllocationDto } from "./BudgetAllocationDto";

export type ImportAllInputDtoOfBudgetAllocationDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: BudgetAllocationDto | undefined;
};
