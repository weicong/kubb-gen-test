import type { BudgetExecutionModeDto } from "./BudgetExecutionModeDto";

export type PagedResultDtoOfBudgetExecutionModeDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: BudgetExecutionModeDto[] | undefined;
};
