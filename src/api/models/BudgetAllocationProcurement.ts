import type { BudgetAllocation } from "./BudgetAllocation";
import type { BudgetState } from "./BudgetState";
import type { FundItem } from "./FundItem";
import type { BudgetAllocationProcurementItem } from "./BudgetAllocationProcurementItem";
import type { User } from "./User";

export type BudgetAllocationProcurement = {
    /**
    * @type integer | undefined int64
    */
    budgetAllocationId?: number | undefined;
    budgetAllocation?: BudgetAllocation | undefined;
    state?: BudgetState | undefined;
    /**
    * @description 项目名称
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @description 科目编码
    * @type string | undefined
    */
    subjectCode?: string | undefined;
    /**
    * @description 项目大类
    * @type string | undefined
    */
    mainClass?: string | undefined;
    /**
    * @description 项目小类
    * @type string | undefined
    */
    subClass?: string | undefined;
    /**
    * @description 支出科目Id
    * @type integer | undefined int64
    */
    fundItemId?: number | undefined;
    fundItem?: FundItem | undefined;
    /**
    * @description 采购物品
    * @type array | undefined
    */
    budgetAllocationProcurementItems?: BudgetAllocationProcurementItem[] | undefined;
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
