import type { BudgetItemDto } from "./BudgetItemDto";

export type PagedResultDtoOfBudgetItemDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: BudgetItemDto[] | undefined;
};
