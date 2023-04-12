import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { CreateContractInput } from "./CreateContractInput";

export type ImportAllInputDtoOfCreateContractInput = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: CreateContractInput | undefined;
};
