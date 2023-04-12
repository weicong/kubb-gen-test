import type { PagedResultDtoOfEntityPropertyValueDto } from "../PagedResultDtoOfEntityPropertyValueDto";

export type GetAllQueryParams = {
    /**
    * @type string | undefined
    */
    entityName?: string | undefined;
    /**
    * @type string | undefined
    */
    propertyName?: string | undefined;
    /**
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    /**
    * @type string | undefined
    */
    sorting?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    skipCount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    maxResultCount?: number | undefined;
};

/**
* @description Success
*/
export type GetAllResponse = PagedResultDtoOfEntityPropertyValueDto;
