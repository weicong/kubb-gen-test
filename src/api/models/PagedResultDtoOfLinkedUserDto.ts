import type { LinkedUserDto } from "./LinkedUserDto";

export type PagedResultDtoOfLinkedUserDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: LinkedUserDto[] | undefined;
};
