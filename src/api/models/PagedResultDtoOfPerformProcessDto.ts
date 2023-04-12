import type { PerformProcessDto } from "./PerformProcessDto";

export type PagedResultDtoOfPerformProcessDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: PerformProcessDto[] | undefined;
};
