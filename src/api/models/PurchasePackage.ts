import type { PurchaseApply } from "./PurchaseApply";
import type { OrganizationUnit } from "./OrganizationUnit";
import type { ApprovalState } from "./ApprovalState";
import type { User } from "./User";

export type PurchasePackage = {
    /**
    * @description 政采申请id
    * @type integer | undefined int64
    */
    purchaseApplyId?: number | undefined;
    purchaseApply?: PurchaseApply | undefined;
    /**
    * @description 科室id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    organizationUnit?: OrganizationUnit | undefined;
    /**
    * @description 使用科室名称
    * @type integer | undefined int64
    */
    usageOrganizationUnitId?: number | undefined;
    usageOrganizationUnit?: OrganizationUnit | undefined;
    /**
    * @description 项目名称对应的预算项目id
    * @type integer | undefined int64
    */
    budgetProjectId?: number | undefined;
    /**
    * @description 说明对应的预算项目明细id
    * @type integer | undefined int64
    */
    budgetProjectDetailId?: number | undefined;
    /**
    * @description 分包的经费总额
    * @type number | undefined double
    */
    packageExpensesTotal?: number | undefined;
    /**
    * @description 经费总额
    * @type number | undefined double
    */
    expensesTotal?: number | undefined;
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
