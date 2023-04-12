import type { PagedResultDtoOfEvaluationCategoryDto } from "../PagedResultDtoOfEvaluationCategoryDto";

export type GetAllQueryParams = {
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
export type GetAllResponse = PagedResultDtoOfEvaluationCategoryDto;
