import type { BudgetLevel } from "./BudgetLevel";
import type { BudgetPlan } from "./BudgetPlan";
import type { OrganizationUnitExtended } from "./OrganizationUnitExtended";
import type { OrganizationUnit } from "./OrganizationUnit";
import type { BudgetItem } from "./BudgetItem";
import type { ApprovalState } from "./ApprovalState";
import type { User } from "./User";

export type Budget = {
    /**
    * @type integer | undefined int64
    */
    parentId?: number | undefined;
    parent?: Budget | undefined;
    budgetLevel?: BudgetLevel | undefined;
    /**
    * @description 预算年度Id
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    budgetPlan?: BudgetPlan | undefined;
    /**
    * @description 申报科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    organizationUnit?: OrganizationUnitExtended | undefined;
    /**
    * @description 归口科室Id（子审批单）
    * @type integer | undefined int64
    */
    manageOrganizationUnitId?: number | undefined;
    manageOrganizationUnit?: OrganizationUnit | undefined;
    /**
    * @description 子审批单（归口科室审批）
    * @type array | undefined
    */
    children?: Budget[] | undefined;
    /**
    * @description 预算项明细
    * @type array | undefined
    */
    budgetItems?: BudgetItem[] | undefined;
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
