import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { CreateContractCommonItemInput } from "./CreateContractCommonItemInput";

export type ImportAllInputDtoOfCreateContractCommonItemInput = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: CreateContractCommonItemInput | undefined;
};
