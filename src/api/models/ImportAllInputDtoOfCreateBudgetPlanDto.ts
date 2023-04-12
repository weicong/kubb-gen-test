import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { CreateBudgetPlanDto } from "./CreateBudgetPlanDto";

export type ImportAllInputDtoOfCreateBudgetPlanDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: CreateBudgetPlanDto | undefined;
};
