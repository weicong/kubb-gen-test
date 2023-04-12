import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { CreateOrUpdateBudgetAllocationItemDto } from "./CreateOrUpdateBudgetAllocationItemDto";

export type ImportAllInputDtoOfCreateOrUpdateBudgetAllocationItemDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: CreateOrUpdateBudgetAllocationItemDto | undefined;
};
