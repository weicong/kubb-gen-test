import type { BudgetAllocateStatus } from "./BudgetAllocateStatus";
import type { BudgetAllocationItemFundSourceDto } from "./BudgetAllocationItemFundSourceDto";
import type { BudgetAllocationItemOrganizationUnitDto } from "./BudgetAllocationItemOrganizationUnitDto";

export type BudgetAllocationItemDto = {
    /**
    * @type integer | undefined int64
    */
    budgetAllocationId?: number | undefined;
    /**
    * @description 科目Id
    * @type integer | undefined int64
    */
    fundItemId?: number | undefined;
    /**
    * @type boolean | undefined
    */
    fundItemIsLeaf?: boolean | undefined;
    /**
    * @description 预算金额合计
    * @type number | undefined double
    */
    amount?: number | undefined;
    /**
    * @description 支出申请类型Ids（以逗号分隔）
    * @type string | undefined
    */
    expenditureClassificationIds?: string | undefined;
    allocateStatus?: BudgetAllocateStatus | undefined;
    /**
    * @type array | undefined
    */
    budgetAllocationItemFundSources?: BudgetAllocationItemFundSourceDto[] | undefined;
    /**
    * @description 分解合计金额
    * @type number | undefined double
    */
    sumTotalAmount?: number | undefined;
    /**
    * @description 分解合计金额校验通过
    * @type boolean | undefined
    */
    sumTotalAmountValid?: boolean | undefined;
    /**
    * @description 执行金额
    * @type number | undefined double
    */
    usageAmount?: number | undefined;
    /**
    * @description 剩余金额
    * @type number | undefined double
    */
    balanceAmount?: number | undefined;
    /**
    * @description 执行率
    * @type number | undefined double
    */
    usageRate?: number | undefined;
    /**
    * @description 定稿
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    /**
    * @type array | undefined
    */
    budgetAllocationItemOrganizationUnits?: BudgetAllocationItemOrganizationUnitDto[] | undefined;
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
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
