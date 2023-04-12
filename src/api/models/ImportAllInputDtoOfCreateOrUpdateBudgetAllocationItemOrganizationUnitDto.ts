import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { CreateOrUpdateBudgetAllocationItemOrganizationUnitDto } from "./CreateOrUpdateBudgetAllocationItemOrganizationUnitDto";

export type ImportAllInputDtoOfCreateOrUpdateBudgetAllocationItemOrganizationUnitDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: CreateOrUpdateBudgetAllocationItemOrganizationUnitDto | undefined;
};