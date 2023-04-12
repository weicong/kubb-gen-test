import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { PurchasePackageItemDto } from "./PurchasePackageItemDto";

export type ImportAllInputDtoOfPurchasePackageItemDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: PurchasePackageItemDto | undefined;
};
