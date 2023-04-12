import type { BudgetExecutionPlan } from "./BudgetExecutionPlan";
import type { BudgetAdjustment } from "./BudgetAdjustment";
import type { ExpenditureCatalog } from "./ExpenditureCatalog";
import type { OrganizationUnit } from "./OrganizationUnit";
import type { BudgetItemExecutionQuarter } from "./BudgetItemExecutionQuarter";
import type { User } from "./User";

export type BudgetExecutionPlanItem = {
    /**
    * @description 用款计划审批单Id
    * @type integer | undefined int64
    */
    budgetExecutionPlanId?: number | undefined;
    budgetExecutionPlan?: BudgetExecutionPlan | undefined;
    /**
    * @description 预算调整审批单Id
    * @type integer | undefined int64
    */
    budgetAdjustmentId?: number | undefined;
    budgetAdjustment?: BudgetAdjustment | undefined;
    /**
    * @description 支出科目Id
    * @type integer | undefined int64
    */
    expenditureCatalogId?: number | undefined;
    expenditureCatalog?: ExpenditureCatalog | undefined;
    /**
    * @description 科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    organizationUnit?: OrganizationUnit | undefined;
    quarter?: BudgetItemExecutionQuarter | undefined;
    /**
    * @description 金额
    * @type number | undefined double
    */
    amount?: number | undefined;
    /**
    * @description 备注
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
