import type { PagedResultDtoOfExpenditureClassificationDto } from "../PagedResultDtoOfExpenditureClassificationDto";

export type GetAllQueryParams = {
    /**
    * @type string | undefined
    */
    filter?: string | undefined;
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
export type GetAllResponse = PagedResultDtoOfExpenditureClassificationDto;
