import type { BudgetPlan } from "./BudgetPlan";
import type { EvaluationCategory } from "./EvaluationCategory";
import type { BudgetAllocationProcurementItem } from "./BudgetAllocationProcurementItem";

export type EvaluationDto = {
    /**
    * @description 预算年度Id
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    budgetPlan?: BudgetPlan | undefined;
    /**
    * @description 绩效评价类别Id
    * @type integer | undefined int64
    */
    evaluationCategoryId?: number | undefined;
    evaluationCategory?: EvaluationCategory | undefined;
    /**
    * @description 科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 类别，如 A01
    * @type string | undefined
    */
    projectCategory?: string | undefined;
    /**
    * @description 预算项目
    * @type integer | undefined int64
    */
    budgetAllocationProcurementItemId?: number | undefined;
    budgetAllocationProcurementItem?: BudgetAllocationProcurementItem | undefined;
    /**
    * @description 创建人姓名
    * @type string | undefined
    */
    creatorUserName?: string | undefined;
    /**
    * @description 创建人所在科室Id
    * @type integer | undefined int64
    */
    creatorUserOrganizationUnitId?: number | undefined;
    /**
    * @description 创建人所在科室名称
    * @type string | undefined
    */
    creatorUserOrganizationUnitDisplayName?: string | undefined;
    /**
    * @description 修改人姓名
    * @type string | undefined
    */
    lastModifierUserName?: string | undefined;
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
