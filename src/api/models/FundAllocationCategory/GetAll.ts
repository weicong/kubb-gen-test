import type { ProcurementType } from "../ProcurementType";
import type { PagedResultDtoOfFundAllocationCategoryDto } from "../PagedResultDtoOfFundAllocationCategoryDto";

export type GetAllQueryParams = {
    procurementType?: ProcurementType | undefined;
    /**
    * @type string | undefined
    */
    sorting?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    skipCount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    maxResultCount?: number | undefined;
};

/**
* @description Success
*/
export type GetAllResponse = PagedResultDtoOfFundAllocationCategoryDto;
