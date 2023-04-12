import type { UserDelegationDto } from "./UserDelegationDto";

export type PagedResultDtoOfUserDelegationDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: UserDelegationDto[] | undefined;
};
