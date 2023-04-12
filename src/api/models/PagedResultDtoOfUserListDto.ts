import type { UserListDto } from "./UserListDto";

export type PagedResultDtoOfUserListDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: UserListDto[] | undefined;
};
