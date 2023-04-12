import type { GetPendingAdjustmentOutput } from "../GetPendingAdjustmentOutput";

export type GetPendingAdjustmentQueryParams = {
    /**
    * @description 预算计划Id
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    /**
    * @description 科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 经费Id
    * @type integer | undefined int64
    */
    fundItemId?: number | undefined;
    /**
    * @description 调出季度
    * @type integer | undefined int32
    */
    outQuarter?: number | undefined;
};

/**
* @description Success
*/
export type GetPendingAdjustmentResponse = GetPendingAdjustmentOutput;
