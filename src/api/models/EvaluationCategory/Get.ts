import type { EvaluationCategoryDto } from "../EvaluationCategoryDto";

export type GetQueryParams = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};

/**
* @description Success
*/
export type GetResponse = EvaluationCategoryDto;
