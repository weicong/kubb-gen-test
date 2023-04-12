import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { FundSourceDto } from "./FundSourceDto";

export type ImportAllInputDtoOfFundSourceDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: FundSourceDto | undefined;
};
