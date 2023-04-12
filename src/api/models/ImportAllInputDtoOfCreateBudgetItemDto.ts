import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { CreateBudgetItemDto } from "./CreateBudgetItemDto";

export type ImportAllInputDtoOfCreateBudgetItemDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: CreateBudgetItemDto | undefined;
};
