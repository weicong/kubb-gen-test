import type { PagedResultDtoOfBudgetAllocationProcurementDto } from "../PagedResultDtoOfBudgetAllocationProcurementDto";
import type { BudgetState } from "../BudgetState";
import type { ProcurementType } from "../ProcurementType";

/**
* @description Success
*/
export type GetAllResponse = PagedResultDtoOfBudgetAllocationProcurementDto;

export type GetAllQueryParams = {
    /**
    * @type integer | undefined int64
    */
    budgetAllocationId?: number | undefined;
    state?: BudgetState | undefined;
    procurementType?: ProcurementType | undefined;
};
