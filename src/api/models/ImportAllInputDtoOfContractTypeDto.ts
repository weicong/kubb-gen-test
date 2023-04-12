import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { ContractTypeDto } from "./ContractTypeDto";

export type ImportAllInputDtoOfContractTypeDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: ContractTypeDto | undefined;
};
