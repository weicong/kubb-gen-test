import type { BudgetDto } from "./BudgetDto";

export type PagedResultDtoOfBudgetDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: BudgetDto[] | undefined;
};
