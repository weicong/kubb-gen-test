import type { UploadedFileDto } from "../UploadedFileDto";

export type GetQueryParams = {
    /**
    * @type string | undefined uuid
    */
    id?: string | undefined;
};

/**
* @description Success
*/
export type GetResponse = UploadedFileDto;
