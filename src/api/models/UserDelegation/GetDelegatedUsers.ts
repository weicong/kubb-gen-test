import type { PagedResultDtoOfUserDelegationDto } from "../PagedResultDtoOfUserDelegationDto";

export type GetDelegatedUsersQueryParams = {
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
export type GetDelegatedUsersResponse = PagedResultDtoOfUserDelegationDto;
