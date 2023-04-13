import type { PagedResultDtoOfRoleDto } from "../PagedResultDtoOfRoleDto";

export type GetAllQueryParams = {
    /**
    * @type string | undefined
    */
    keyword?: string | undefined;
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
export type GetAllResponse = PagedResultDtoOfRoleDto;
