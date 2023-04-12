import type { ListResultDtoOfUploadedFileDto } from "../ListResultDtoOfUploadedFileDto";

export type GetAllQueryParams = {
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
};

/**
* @description Success
*/
export type GetAllResponse = ListResultDtoOfUploadedFileDto;
