import type { BudgetAdjustmentType } from "./BudgetAdjustmentType";
import type { ExpenditureCatalog } from "./ExpenditureCatalog";
import type { OrganizationUnit } from "./OrganizationUnit";
import type { BudgetItem } from "./BudgetItem";
import type { BudgetExecutionPlanItem } from "./BudgetExecutionPlanItem";
import type { ApprovalState } from "./ApprovalState";
import type { User } from "./User";

export type BudgetAdjustment = {
    "type"?: BudgetAdjustmentType | undefined;
    /**
    * @description 支出科目Id
    * @type integer | undefined int64
    */
    expenditureCatalogId?: number | undefined;
    expenditureCatalog?: ExpenditureCatalog | undefined;
    /**
    * @description 申报科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    organizationUnit?: OrganizationUnit | undefined;
    /**
    * @description 调出季度
    * @type integer | undefined int32
    */
    fromQuarter?: number | undefined;
    /**
    * @description 调入季度
    * @type integer | undefined int32
    */
    toQuarter?: number | undefined;
    /**
    * @description 金额
    * @type number | undefined double
    */
    amount?: number | undefined;
    /**
    * @description 预算项集合
    * @type array | undefined
    */
    budgetItems?: BudgetItem[] | undefined;
    /**
    * @description 用款计划项
    * @type array | undefined
    */
    budgetExecutionPlanItems?: BudgetExecutionPlanItem[] | undefined;
    /**
    * @description 情况说明
    * @type string | undefined
    */
    description?: string | undefined;
    approvalState?: ApprovalState | undefined;
    /**
    * @description 审批时间
    * @type string | undefined date-time
    */
    approvalTime?: string | undefined;
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
