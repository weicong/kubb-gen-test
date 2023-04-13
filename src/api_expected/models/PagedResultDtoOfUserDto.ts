import type { UserDto } from "./UserDto";

export type PagedResultDtoOfUserDto = {
    /**
    * @type array | undefined
    */
    items?: UserDto[] | undefined;
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
};
