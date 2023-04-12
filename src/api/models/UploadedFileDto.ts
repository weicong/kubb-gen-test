import type { StorageMode } from "./StorageMode";

export type UploadedFileDto = {
    /**
    * @type integer | undefined int64
    */
    creatorUserId?: number | undefined;
    /**
    * @type string | undefined
    */
    creatorUserName?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    creationTime?: string | undefined;
    /**
    * @type string | undefined
    */
    description?: string | undefined;
    storageMode?: StorageMode | undefined;
    /**
    * @type string | undefined
    */
    fileName?: string | undefined;
    /**
    * @type string | undefined
    */
    fileType?: string | undefined;
    /**
    * @type string
    */
    fileToken: string;
};
