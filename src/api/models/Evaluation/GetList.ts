import type { ListResultDtoOfEvaluationDto } from "../ListResultDtoOfEvaluationDto";

export type GetListQueryParams = {
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
export type GetListResponse = ListResultDtoOfEvaluationDto;
