import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { PerformPersonWageDto } from "./PerformPersonWageDto";

export type ImportAllInputDtoOfPerformPersonWageDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: PerformPersonWageDto | undefined;
};
