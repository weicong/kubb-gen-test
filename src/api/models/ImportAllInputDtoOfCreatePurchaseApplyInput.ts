import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { CreatePurchaseApplyInput } from "./CreatePurchaseApplyInput";

export type ImportAllInputDtoOfCreatePurchaseApplyInput = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: CreatePurchaseApplyInput | undefined;
};
