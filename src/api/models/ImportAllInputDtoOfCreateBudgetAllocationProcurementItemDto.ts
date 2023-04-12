import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { CreateBudgetAllocationProcurementItemDto } from "./CreateBudgetAllocationProcurementItemDto";

export type ImportAllInputDtoOfCreateBudgetAllocationProcurementItemDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: CreateBudgetAllocationProcurementItemDto | undefined;
};
