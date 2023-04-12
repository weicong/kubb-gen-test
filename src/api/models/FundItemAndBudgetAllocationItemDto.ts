import type { FundItemTreeNodeDto } from "./FundItemTreeNodeDto";
import type { CreateOrUpdateBudgetAllocationItemDto } from "./CreateOrUpdateBudgetAllocationItemDto";

export type FundItemAndBudgetAllocationItemDto = {
    fundItem?: FundItemTreeNodeDto | undefined;
    budgetAllocationItem?: CreateOrUpdateBudgetAllocationItemDto | undefined;
    /**
    * @description 定稿
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    /**
    * @description 已分配
    * @type number | undefined double
    */
    amountAllocated?: number | undefined;
    /**
    * @description 已分配率
    * @type number | undefined double
    */
    amountAllocatedRate?: number | undefined;
};
