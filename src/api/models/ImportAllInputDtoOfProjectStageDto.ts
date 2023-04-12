import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { ProjectStageDto } from "./ProjectStageDto";

export type ImportAllInputDtoOfProjectStageDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: ProjectStageDto | undefined;
};
