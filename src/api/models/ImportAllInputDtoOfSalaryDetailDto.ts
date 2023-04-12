import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { SalaryDetailDto } from "./SalaryDetailDto";

export type ImportAllInputDtoOfSalaryDetailDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: SalaryDetailDto | undefined;
};
