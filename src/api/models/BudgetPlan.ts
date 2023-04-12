import type { BudgetPlanStatus } from "./BudgetPlanStatus";
import type { BudgetFundItem } from "./BudgetFundItem";
import type { PublishStatus } from "./PublishStatus";
import type { BudgetDetail } from "./BudgetDetail";
import type { User } from "./User";

export type BudgetPlan = {
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
    budgetFundItems?: BudgetFundItem[] | undefined;
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
    budgetDetails?: BudgetDetail[] | undefined;
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
