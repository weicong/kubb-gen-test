import type { BudgetState } from "./BudgetState";
import type { ProcurementType } from "./ProcurementType";

export type GetAllBudgetAllocationProcurementsInput = {
    /**
    * @type integer | undefined int64
    */
    budgetAllocationId?: number | undefined;
    state?: BudgetState | undefined;
    procurementType?: ProcurementType | undefined;
};
