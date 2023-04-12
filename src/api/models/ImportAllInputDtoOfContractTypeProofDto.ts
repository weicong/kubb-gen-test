import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { ContractTypeProofDto } from "./ContractTypeProofDto";

export type ImportAllInputDtoOfContractTypeProofDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: ContractTypeProofDto | undefined;
};
