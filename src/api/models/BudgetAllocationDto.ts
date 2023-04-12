import type { ProcurementType } from "./ProcurementType";
import type { BudgetAllocationDetailDto } from "./BudgetAllocationDetailDto";
import type { BudgetAllocationItemDto } from "./BudgetAllocationItemDto";
import type { BudgetAllocationProcurementDto } from "./BudgetAllocationProcurementDto";

export type BudgetAllocationDto = {
    /**
    * @description 预算计划Id
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    /**
    * @description 预算计划
    * @type string | undefined
    */
    budgetPlanYear?: string | undefined;
    /**
    * @description 经费分配类别Id
    * @type integer | undefined int64
    */
    fundAllocationCategoryId?: number | undefined;
    /**
    * @description 经费分配类别
    * @type string | undefined
    */
    fundAllocationCategoryName?: string | undefined;
    fundAllocationCategoryProcurementType?: ProcurementType | undefined;
    /**
    * @description 描述
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @description 金额明细
    * @type array | undefined
    */
    budgetAllocationDetails?: BudgetAllocationDetailDto[] | undefined;
    /**
    * @description 非政采项目分配表
    * @type array | undefined
    */
    budgetAllocationItems?: BudgetAllocationItemDto[] | undefined;
    /**
    * @description 政采项目分配表
    * @type array | undefined
    */
    budgetAllocationProcurements?: BudgetAllocationProcurementDto[] | undefined;
    /**
    * @description 预留 - 合计
    * @type number | undefined double
    */
    reservedAmount?: number | undefined;
    /**
    * @description 预留 - 已分配合计
    * @type number | undefined double
    */
    reservedAmountAllocated?: number | undefined;
    /**
    * @description 预留 - 已分配率
    * @type number | undefined double
    */
    reservedAmountAllocatedRate?: number | undefined;
    /**
    * @description 可用 - 合计
    * @type number | undefined double
    */
    amount?: number | undefined;
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
    /**
    * @description 合计金额
    * @type number | undefined double
    */
    totalAmount?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
