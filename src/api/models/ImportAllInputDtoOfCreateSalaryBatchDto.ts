import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { CreateSalaryBatchDto } from "./CreateSalaryBatchDto";

export type ImportAllInputDtoOfCreateSalaryBatchDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: CreateSalaryBatchDto | undefined;
};
