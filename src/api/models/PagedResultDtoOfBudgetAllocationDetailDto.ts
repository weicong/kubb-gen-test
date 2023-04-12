import type { BudgetAllocationDetailDto } from "./BudgetAllocationDetailDto";

export type PagedResultDtoOfBudgetAllocationDetailDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: BudgetAllocationDetailDto[] | undefined;
};
