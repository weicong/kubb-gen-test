import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { CreateAssetChangeDto } from "./CreateAssetChangeDto";

export type ImportAllInputDtoOfCreateAssetChangeDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: CreateAssetChangeDto | undefined;
};
