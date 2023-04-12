import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { CreatePayAddInput } from "./CreatePayAddInput";

export type ImportAllInputDtoOfCreatePayAddInput = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: CreatePayAddInput | undefined;
};
