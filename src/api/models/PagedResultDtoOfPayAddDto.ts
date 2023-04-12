import type { PayAddDto } from "./PayAddDto";

export type PagedResultDtoOfPayAddDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: PayAddDto[] | undefined;
};
