import type { BudgetExecutionPlanDto } from "./BudgetExecutionPlanDto";

export type PagedResultDtoOfBudgetExecutionPlanDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: BudgetExecutionPlanDto[] | undefined;
};
