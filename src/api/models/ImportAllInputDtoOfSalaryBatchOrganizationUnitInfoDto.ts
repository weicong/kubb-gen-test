import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { SalaryBatchOrganizationUnitInfoDto } from "./SalaryBatchOrganizationUnitInfoDto";

export type ImportAllInputDtoOfSalaryBatchOrganizationUnitInfoDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: SalaryBatchOrganizationUnitInfoDto | undefined;
};
