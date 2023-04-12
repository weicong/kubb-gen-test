import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { CreateAssetFixedDto } from "./CreateAssetFixedDto";

export type ImportAllInputDtoOfCreateAssetFixedDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: CreateAssetFixedDto | undefined;
};