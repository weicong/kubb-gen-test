import type { BudgetPlanStatus } from "./BudgetPlanStatus";
import type { BudgetFundItemDto } from "./BudgetFundItemDto";
import type { PublishStatus } from "./PublishStatus";
import type { BudgetDetailDto } from "./BudgetDetailDto";

export type BudgetPlanDto = {
    /**
    * @description 年度
    * @type integer | undefined int32
    */
    year?: number | undefined;
    /**
    * @description 描述
    * @type string | undefined
    */
    description?: string | undefined;
    status?: BudgetPlanStatus | undefined;
    /**
    * @description 经费配置
    * @type array | undefined
    */
    budgetFundItems?: BudgetFundItemDto[] | undefined;
    /**
    * @description 预算申报开始时间
    * @type string | undefined date-time
    */
    declarationStartDate?: string | undefined;
    /**
    * @description 预算申报截止时间
    * @type string | undefined date-time
    */
    declarationEndDate?: string | undefined;
    /**
    * @description 在预算申报期间
    * @type boolean | undefined
    */
    isInDeclaration?: boolean | undefined;
    /**
    * @description 预算下达金额
    * @type number | undefined double
    */
    budgetAmount?: number | undefined;
    state?: PublishStatus | undefined;
    /**
    * @description 预算下达明细
    * @type array | undefined
    */
    budgetDetails?: BudgetDetailDto[] | undefined;
    /**
    * @description 预算下达明细合计
    * @type number | undefined double
    */
    budgetDetailsTotalAmount?: number | undefined;
    allocationStatus?: PublishStatus | undefined;
    /**
    * @description 预算执行开始时间
    * @type string | undefined date-time
    */
    executionStartDate?: string | undefined;
    /**
    * @description 预算执行截止时间
    * @type string | undefined date-time
    */
    executionEndDate?: string | undefined;
    /**
    * @description 在预算执行期间
    * @type boolean | undefined
    */
    isInExecution?: boolean | undefined;
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
