import type { BudgetAllocationProcurementDto } from "./BudgetAllocationProcurementDto";

export type PagedResultDtoOfBudgetAllocationProcurementDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: BudgetAllocationProcurementDto[] | undefined;
};
