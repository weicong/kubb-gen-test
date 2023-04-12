import type { BudgetStatistic } from "./BudgetStatistic";

export type GetPendingAdjustmentOutput = {
    budgetStatistic?: BudgetStatistic | undefined;
    /**
    * @description 调出季度
    * @type integer | undefined int32
    */
    outQuarter?: number | undefined;
    /**
    * @description 待定/待审批的调出金额合计
    * @type number | undefined double
    */
    pendingAdjustmentAmount?: number | undefined;
    /**
    * @description 可调出的金额
    * @type number | undefined double
    */
    availableAdjustmentAmount?: number | undefined;
};
