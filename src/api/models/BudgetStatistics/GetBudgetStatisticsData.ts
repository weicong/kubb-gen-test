import type { ListResultDtoOfBudgetStatistic } from "../ListResultDtoOfBudgetStatistic";

export type GetBudgetStatisticsDataQueryParams = {
    /**
    * @description 预算计划Id
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    /**
    * @description 科目Id
    * @type integer | undefined int64
    */
    fundItemId?: number | undefined;
    /**
    * @description 支出申请类型Id
    * @type integer | undefined int64
    */
    fundAllocationCategoryId?: number | undefined;
    /**
    * @description 按树形结构显示科目（true）
    * @type boolean | undefined
    */
    displayAsFundItemTree?: boolean | undefined;
    /**
    * @description 经费所属科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 使用科室Id
    * @type integer | undefined int64
    */
    usedByOrganizationUnitId?: number | undefined;
    /**
    * @description 支出类型名称
    * @type string | undefined
    */
    expenditureClassificationName?: string | undefined;
};

/**
* @description Success
*/
export type GetBudgetStatisticsDataResponse = ListResultDtoOfBudgetStatistic;
