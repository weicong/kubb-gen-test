import type { EntityChangeListDto } from "./EntityChangeListDto";

export type PagedResultDtoOfEntityChangeListDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: EntityChangeListDto[] | undefined;
};
