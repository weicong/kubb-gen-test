import type { BudgetAllocationDto } from "./BudgetAllocationDto";

export type PagedResultDtoOfBudgetAllocationDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: BudgetAllocationDto[] | undefined;
};
