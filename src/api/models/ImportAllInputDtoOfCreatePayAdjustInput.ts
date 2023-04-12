import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { CreatePayAdjustInput } from "./CreatePayAdjustInput";

export type ImportAllInputDtoOfCreatePayAdjustInput = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: CreatePayAdjustInput | undefined;
};
