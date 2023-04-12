import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { OrganizationUnitInfoDto } from "./OrganizationUnitInfoDto";

export type ImportAllInputDtoOfOrganizationUnitInfoDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: OrganizationUnitInfoDto | undefined;
};
