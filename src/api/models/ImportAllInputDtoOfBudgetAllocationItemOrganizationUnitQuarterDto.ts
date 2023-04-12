import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { BudgetAllocationItemOrganizationUnitQuarterDto } from "./BudgetAllocationItemOrganizationUnitQuarterDto";

export type ImportAllInputDtoOfBudgetAllocationItemOrganizationUnitQuarterDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: BudgetAllocationItemOrganizationUnitQuarterDto | undefined;
};
