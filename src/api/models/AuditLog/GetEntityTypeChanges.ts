import type { PagedResultDtoOfEntityChangeListDto } from "../PagedResultDtoOfEntityChangeListDto";

export type GetEntityTypeChangesQueryParams = {
    /**
    * @type string | undefined
    */
    entityTypeFullName?: string | undefined;
    /**
    * @type string | undefined
    */
    entityId?: string | undefined;
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
export type GetEntityTypeChangesResponse = PagedResultDtoOfEntityChangeListDto;
