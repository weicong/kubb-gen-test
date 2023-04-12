import type { RecordCountStatisticsData } from "../RecordCountStatisticsData";

export type GetRecordCountStatisticsQueryParams = {
    /**
    * @description 预算计划Id
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    /**
    * @description 预算项执行类型
    * @type integer | undefined int64
    */
    budgetItemBudgetExecutionModeId?: number | undefined;
    /**
    * @description 申请类型:0 归口科室申请，1业务科室申请
    * @type integer | undefined int32
    */
    "type"?: number | undefined;
    /**
    * @description 项目（采购的物品或服务）
    * @type string | undefined
    */
    budgetAllocationProcurementItemName?: string | undefined;
    /**
    * @type string | undefined
    */
    sorting?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    skipCount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    maxResultCount?: number | undefined;
};

/**
* @description Success
*/
export type GetRecordCountStatisticsResponse = RecordCountStatisticsData;
