import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { CreateApprovalProcessInput } from "./CreateApprovalProcessInput";

export type ImportAllInputDtoOfCreateApprovalProcessInput = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: CreateApprovalProcessInput | undefined;
};
