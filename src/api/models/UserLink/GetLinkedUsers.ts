import type { PagedResultDtoOfLinkedUserDto } from "../PagedResultDtoOfLinkedUserDto";

export type GetLinkedUsersQueryParams = {
    /**
    * @type integer | undefined int32
    */
    maxResultCount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    skipCount?: number | undefined;
    /**
    * @type string | undefined
    */
    sorting?: string | undefined;
};

/**
* @description Success
*/
export type GetLinkedUsersResponse = PagedResultDtoOfLinkedUserDto;
