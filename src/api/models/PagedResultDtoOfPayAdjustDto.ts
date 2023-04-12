import type { PayAdjustDto } from "./PayAdjustDto";

export type PagedResultDtoOfPayAdjustDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: PayAdjustDto[] | undefined;
};
