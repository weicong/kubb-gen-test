import type { BudgetAllocation } from "./BudgetAllocation";
import type { FundItem } from "./FundItem";
import type { BudgetAllocateStatus } from "./BudgetAllocateStatus";
import type { BudgetAllocationItemFundSource } from "./BudgetAllocationItemFundSource";
import type { BudgetAllocationItemOrganizationUnit } from "./BudgetAllocationItemOrganizationUnit";
import type { User } from "./User";

export type BudgetAllocationItem = {
    /**
    * @type integer | undefined int64
    */
    budgetAllocationId?: number | undefined;
    budgetAllocation?: BudgetAllocation | undefined;
    /**
    * @description 支出科目Id
    * @type integer | undefined int64
    */
    fundItemId?: number | undefined;
    fundItem?: FundItem | undefined;
    /**
    * @description 金额
    * @type number | undefined double
    */
    amount?: number | undefined;
    /**
    * @description 支出申请类型（以逗号分隔）
    * @type string | undefined
    */
    expenditureClassificationIds?: string | undefined;
    allocateStatus?: BudgetAllocateStatus | undefined;
    /**
    * @type array | undefined
    */
    budgetAllocationItemFundSources?: BudgetAllocationItemFundSource[] | undefined;
    /**
    * @type array | undefined
    */
    budgetAllocationItemOrganizationUnits?: BudgetAllocationItemOrganizationUnit[] | undefined;
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
