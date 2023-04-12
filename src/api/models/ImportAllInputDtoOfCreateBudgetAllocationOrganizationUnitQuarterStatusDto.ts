import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { CreateBudgetAllocationOrganizationUnitQuarterStatusDto } from "./CreateBudgetAllocationOrganizationUnitQuarterStatusDto";

export type ImportAllInputDtoOfCreateBudgetAllocationOrganizationUnitQuarterStatusDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: CreateBudgetAllocationOrganizationUnitQuarterStatusDto | undefined;
};
