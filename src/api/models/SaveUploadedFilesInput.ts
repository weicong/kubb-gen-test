import type { StorageMode } from "./StorageMode";
import type { FileDto } from "./FileDto";

export type SaveUploadedFilesInput = {
    /**
    * @type string | undefined
    */
    entityTypeName?: string | undefined;
    /**
    * @type string | undefined
    */
    entityId?: string | undefined;
    /**
    * @type string | undefined
    */
    category?: string | undefined;
    storageMode?: StorageMode | undefined;
    /**
    * @description Files in TempFileCache
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
};
