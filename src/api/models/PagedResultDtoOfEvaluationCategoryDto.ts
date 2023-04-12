import type { EvaluationCategoryDto } from "./EvaluationCategoryDto";

export type PagedResultDtoOfEvaluationCategoryDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: EvaluationCategoryDto[] | undefined;
};
