import type { EntityPropertyValueDto } from "./EntityPropertyValueDto";

export type PagedResultDtoOfEntityPropertyValueDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: EntityPropertyValueDto[] | undefined;
};
