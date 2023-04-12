import type { SharingMode } from "./SharingMode";
import type { BudgetAllocationItemOrganizationUnitQuarterDto } from "./BudgetAllocationItemOrganizationUnitQuarterDto";
import type { BudgetAllocateStatus } from "./BudgetAllocateStatus";

export type BudgetAllocationItemOrganizationUnitDto = {
    /**
    * @type integer | undefined int64
    */
    budgetAllocationItemId?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    budgetAllocationItemBudgetAllocationBudgetPlanYear?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    budgetAllocationItemFundItemId?: number | undefined;
    /**
    * @type string | undefined
    */
    budgetAllocationItemFundItemName?: string | undefined;
    /**
    * @type string | undefined
    */
    budgetAllocationItemFundItemFullName?: string | undefined;
    /**
    * @description 科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 科室
    * @type string | undefined
    */
    organizationUnitDisplayName?: string | undefined;
    /**
    * @description 金额
    * @type number | undefined double
    */
    amount?: number | undefined;
    sharingMode?: SharingMode | undefined;
    /**
    * @description 共享科室（以逗号分隔）
    * @type string | undefined
    */
    sharingOrganizationUnitIds?: string | undefined;
    /**
    * @description 各季度金额
    * @type array | undefined
    */
    budgetAllocationItemOrganizationUnitQuarters?: BudgetAllocationItemOrganizationUnitQuarterDto[] | undefined;
    /**
    * @description 可用 - 已分配合计
    * @type number | undefined double
    */
    amountAllocated?: number | undefined;
    /**
    * @description 可用 - 已分配率
    * @type number | undefined double
    */
    amountAllocatedRate?: number | undefined;
    allocateStatus?: BudgetAllocateStatus | undefined;
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
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
