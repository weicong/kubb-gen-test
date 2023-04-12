import type { BudgetItem } from "./BudgetItem";
import type { PurchasePackageItem } from "./PurchasePackageItem";
import type { BudgetAllocationProcurementItem } from "./BudgetAllocationProcurementItem";
import type { OrganizationUnit } from "./OrganizationUnit";
import type { ApprovalState } from "./ApprovalState";
import type { User } from "./User";

export type PurchaseApply = {
    /**
    * @description 预算项Id
    * @type integer | undefined int64
    */
    budgetItemId?: number | undefined;
    budgetItem?: BudgetItem | undefined;
    /**
    * @description 政采项目分包
    * @type array | undefined
    */
    purchasePackageItems?: PurchasePackageItem[] | undefined;
    /**
    * @type integer | undefined int64
    */
    budgetAllocationProcurementItemId?: number | undefined;
    budgetAllocationProcurementItem?: BudgetAllocationProcurementItem | undefined;
    /**
    * @description 使用科室名称
    * @type integer | undefined int64
    */
    usageOrganizationUnitId?: number | undefined;
    usageOrganizationUnit?: OrganizationUnit | undefined;
    /**
    * @description 定稿季度
    * @type integer | undefined int32
    */
    activeInQuarter?: number | undefined;
    /**
    * @description 审批通过季度
    * @type integer | undefined int32
    */
    approvedInQuarter?: number | undefined;
    /**
    * @description 父申请id,也就是归口科室申请id
    * @type integer | undefined int64
    */
    purchaseApplyId?: number | undefined;
    parentPurchaseApply?: PurchaseApply | undefined;
    /**
    * @description 申请类型:0归口科室申请，1业务科室申请
    * @type integer | undefined int32
    */
    "type"?: number | undefined;
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
