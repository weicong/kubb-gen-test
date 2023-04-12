import type { RecordCountStatisticsData } from "../RecordCountStatisticsData";
import type { BudgetLevel } from "../BudgetLevel";
import type { ApprovalState } from "../ApprovalState";

/**
* @description Success
*/
export type GetRecordCountStatisticsResponse = RecordCountStatisticsData;

export type GetRecordCountStatisticsQueryParams = {
    budgetLevel: BudgetLevel;
    /**
    * @description 预算年度Id
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    /**
    * @description 申报科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 归口科室Id（子审批单）
    * @type integer | undefined int64
    */
    manageOrganizationUnitId?: number | undefined;
    approvalState?: ApprovalState | undefined;
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
