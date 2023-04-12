import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { ExpenditureClassificationDto } from "./ExpenditureClassificationDto";

export type ImportAllInputDtoOfExpenditureClassificationDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: ExpenditureClassificationDto | undefined;
};
