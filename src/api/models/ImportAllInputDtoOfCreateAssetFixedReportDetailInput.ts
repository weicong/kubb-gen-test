import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { CreateAssetFixedReportDetailInput } from "./CreateAssetFixedReportDetailInput";

export type ImportAllInputDtoOfCreateAssetFixedReportDetailInput = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: CreateAssetFixedReportDetailInput | undefined;
};
