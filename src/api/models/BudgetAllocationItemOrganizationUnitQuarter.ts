import type { BudgetAllocationItemOrganizationUnit } from "./BudgetAllocationItemOrganizationUnit";
import type { BudgetAllocationItemOrganizationUnitQuarterType } from "./BudgetAllocationItemOrganizationUnitQuarterType";
import type { User } from "./User";

export type BudgetAllocationItemOrganizationUnitQuarter = {
    /**
    * @type integer | undefined int64
    */
    budgetAllocationItemOrganizationUnitId?: number | undefined;
    budgetAllocationItemOrganizationUnit?: BudgetAllocationItemOrganizationUnit | undefined;
    /**
    * @description 季度
    * @type integer | undefined int32
    */
    quarter?: number | undefined;
    /**
    * @description 金额
    * @type number | undefined double
    */
    amount?: number | undefined;
    "type"?: BudgetAllocationItemOrganizationUnitQuarterType | undefined;
    /**
    * @description 审批单Id（格式 EntityTypeName#Id）
    * @type string | undefined
    */
    approvalForm?: string | undefined;
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
