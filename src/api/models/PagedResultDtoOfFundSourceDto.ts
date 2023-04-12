import type { FundSourceDto } from "./FundSourceDto";

export type PagedResultDtoOfFundSourceDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: FundSourceDto[] | undefined;
};
