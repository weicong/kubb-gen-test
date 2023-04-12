import type { PerformPersonWageDto } from "./PerformPersonWageDto";

export type PagedResultDtoOfPerformPersonWageDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: PerformPersonWageDto[] | undefined;
};
