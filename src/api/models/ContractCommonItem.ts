import type { BudgetItem } from "./BudgetItem";
import type { BudgetExecutionMode } from "./BudgetExecutionMode";
import type { ExpenditureCatalog } from "./ExpenditureCatalog";
import type { OrganizationUnit } from "./OrganizationUnit";
import type { BudgetAllocationItemOrganizationUnit } from "./BudgetAllocationItemOrganizationUnit";
import type { UseState } from "./UseState";
import type { ApprovalState } from "./ApprovalState";
import type { User } from "./User";

export type ContractCommonItem = {
    /**
    * @description 预算项Id
    * @type integer | undefined int64
    */
    budgetItemId?: number | undefined;
    budgetItem?: BudgetItem | undefined;
    /**
    * @description 申请金额
    * @type number | undefined double
    */
    amount?: number | undefined;
    /**
    * @description 合同Id
    * @type integer | undefined int64
    */
    contractId?: number | undefined;
    /**
    * @description 预算执行类型Id
    * @type integer | undefined int64
    */
    budgetExecutionModeId?: number | undefined;
    budgetExecutionMode?: BudgetExecutionMode | undefined;
    /**
    * @description 预算科目Id
    * @type integer | undefined int64
    */
    expenditureCatalogId?: number | undefined;
    expenditureCatalog?: ExpenditureCatalog | undefined;
    /**
    * @description 预算项所属科室Id
    * @type integer | undefined int64
    */
    usingOrganizationUnitId?: number | undefined;
    usingOrganizationUnit?: OrganizationUnit | undefined;
    /**
    * @description 科室日常公用id
    * @type integer | undefined int64
    */
    budgetAllocationItemOrganizationUnitId?: number | undefined;
    budgetAllocationItemOrganizationUnit?: BudgetAllocationItemOrganizationUnit | undefined;
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
    useState?: UseState | undefined;
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
