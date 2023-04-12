import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { BudgetAllocationDetailDto } from "./BudgetAllocationDetailDto";

export type ImportAllInputDtoOfBudgetAllocationDetailDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: BudgetAllocationDetailDto | undefined;
};
