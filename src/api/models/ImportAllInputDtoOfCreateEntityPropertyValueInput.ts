import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { CreateEntityPropertyValueInput } from "./CreateEntityPropertyValueInput";

export type ImportAllInputDtoOfCreateEntityPropertyValueInput = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: CreateEntityPropertyValueInput | undefined;
};
