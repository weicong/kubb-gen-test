import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { CreateContractPayDto } from "./CreateContractPayDto";

export type ImportAllInputDtoOfCreateContractPayDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: CreateContractPayDto | undefined;
};
