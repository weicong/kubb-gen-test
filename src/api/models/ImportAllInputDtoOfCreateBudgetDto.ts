import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { CreateBudgetDto } from "./CreateBudgetDto";

export type ImportAllInputDtoOfCreateBudgetDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: CreateBudgetDto | undefined;
};
