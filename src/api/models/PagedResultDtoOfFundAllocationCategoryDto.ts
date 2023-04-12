import type { FundAllocationCategoryDto } from "./FundAllocationCategoryDto";

export type PagedResultDtoOfFundAllocationCategoryDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: FundAllocationCategoryDto[] | undefined;
};
