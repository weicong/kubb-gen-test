import type { PagedResultDtoOfSalaryBatchDto } from "../PagedResultDtoOfSalaryBatchDto";

export type GetAllQueryParams = {
    /**
    * @type integer | undefined int32
    */
    year?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    month?: number | undefined;
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
export type GetAllResponse = PagedResultDtoOfSalaryBatchDto;
