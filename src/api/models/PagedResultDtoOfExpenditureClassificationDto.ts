import type { ExpenditureClassificationDto } from "./ExpenditureClassificationDto";

export type PagedResultDtoOfExpenditureClassificationDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: ExpenditureClassificationDto[] | undefined;
};
