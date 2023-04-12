import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { BudgetFundItemDto } from "./BudgetFundItemDto";

export type ImportAllInputDtoOfBudgetFundItemDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: BudgetFundItemDto | undefined;
};
