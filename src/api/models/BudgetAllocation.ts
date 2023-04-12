import type { BudgetPlan } from "./BudgetPlan";
import type { FundAllocationCategory } from "./FundAllocationCategory";
import type { BudgetAllocationDetail } from "./BudgetAllocationDetail";
import type { BudgetAllocationItem } from "./BudgetAllocationItem";
import type { BudgetAllocationProcurement } from "./BudgetAllocationProcurement";
import type { User } from "./User";

export type BudgetAllocation = {
    /**
    * @description 预算计划Id
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    budgetPlan?: BudgetPlan | undefined;
    /**
    * @description 经费分配类别Id
    * @type integer | undefined int64
    */
    fundAllocationCategoryId?: number | undefined;
    fundAllocationCategory?: FundAllocationCategory | undefined;
    /**
    * @description 描述
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @description 金额明细
    * @type array | undefined
    */
    budgetAllocationDetails?: BudgetAllocationDetail[] | undefined;
    /**
    * @description 支出科目分配表
    * @type array | undefined
    */
    budgetAllocationItems?: BudgetAllocationItem[] | undefined;
    /**
    * @type array | undefined
    */
    budgetAllocationProcurements?: BudgetAllocationProcurement[] | undefined;
    /**
    * @description 已定稿（已提交审批）
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    submitterUser?: User | undefined;
    /**
    * @description 定稿人Id（提交人Id）
    * @type integer | undefined int64
    */
    submitterUserId?: number | undefined;
    /**
    * @description 定稿时间（提交时间）
    * @type string | undefined date-time
    */
    submissionTime?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @type boolean | undefined
    */
    isDeleted?: boolean | undefined;
    deleterUser?: User | undefined;
    /**
    * @type integer | undefined int64
    */
    deleterUserId?: number | undefined;
    /**
    * @type string | undefined date-time
    */
    deletionTime?: string | undefined;
    creatorUser?: User | undefined;
    lastModifierUser?: User | undefined;
    /**
    * @type string | undefined date-time
    */
    lastModificationTime?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    lastModifierUserId?: number | undefined;
    /**
    * @type string | undefined date-time
    */
    creationTime?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    creatorUserId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
