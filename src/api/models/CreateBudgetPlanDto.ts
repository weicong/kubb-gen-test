import type { BudgetPlanStatus } from "./BudgetPlanStatus";
import type { BudgetFundItemDto } from "./BudgetFundItemDto";
import type { PublishStatus } from "./PublishStatus";
import type { BudgetDetailDto } from "./BudgetDetailDto";

export type CreateBudgetPlanDto = {
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
};
