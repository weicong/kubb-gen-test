import type { BudgetFundItemDto } from "./BudgetFundItemDto";

export type PagedResultDtoOfBudgetFundItemDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: BudgetFundItemDto[] | undefined;
};
