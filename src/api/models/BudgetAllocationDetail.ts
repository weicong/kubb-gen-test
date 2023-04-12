import type { BudgetAllocation } from "./BudgetAllocation";
import type { BudgetState } from "./BudgetState";
import type { BudgetType } from "./BudgetType";
import type { User } from "./User";

export type BudgetAllocationDetail = {
    /**
    * @type integer | undefined int64
    */
    budgetAllocationId?: number | undefined;
    budgetAllocation?: BudgetAllocation | undefined;
    state?: BudgetState | undefined;
    "type"?: BudgetType | undefined;
    /**
    * @description 金额
    * @type number | undefined double
    */
    amount?: number | undefined;
    /**
    * @description 描述
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @description 描述
    * @type string | undefined
    */
    description?: string | undefined;
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
