import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { CreatePayBillInput } from "./CreatePayBillInput";

export type ImportAllInputDtoOfCreatePayBillInput = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: CreatePayBillInput | undefined;
};
