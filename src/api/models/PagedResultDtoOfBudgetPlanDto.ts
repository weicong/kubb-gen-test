import type { BudgetPlanDto } from "./BudgetPlanDto";

export type PagedResultDtoOfBudgetPlanDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: BudgetPlanDto[] | undefined;
};
