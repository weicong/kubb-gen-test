import type { ListResultDtoOfNameValueDto } from "../ListResultDtoOfNameValueDto";

export type GetAllOfAnEntityPropertyQueryParams = {
    /**
    * @type string
    */
    entityName: string;
    /**
    * @type string
    */
    propertyName: string;
};

/**
* @description Success
*/
export type GetAllOfAnEntityPropertyResponse = ListResultDtoOfNameValueDto;
