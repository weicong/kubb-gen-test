import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { ProjectDto } from "./ProjectDto";

export type ImportAllInputDtoOfProjectDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: ProjectDto | undefined;
};
