import type { BudgetAllocationProcurementItemDto } from "./BudgetAllocationProcurementItemDto";

export type PagedResultDtoOfBudgetAllocationProcurementItemDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: BudgetAllocationProcurementItemDto[] | undefined;
};
