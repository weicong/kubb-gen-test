import type { ListResultDtoOfNameValueDtoOfDecimal } from "../ListResultDtoOfNameValueDtoOfDecimal";

export type GetMonthlyBudgetStatisticDataQueryParams = {
    /**
    * @description 预算计划Id
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    /**
    * @description 使用科室Id
    * @type integer | undefined int64
    */
    usingOrganizationUnitId?: number | undefined;
    /**
    * @description 预算执行类型Ids
    * @type array | undefined
    */
    budgetExecutionModeIds?: number[] | undefined;
    /**
    * @description 基本支出/申请类型
    * @type string | undefined
    */
    expenditureClassificationName?: string | undefined;
    /**
    * @description 预算项Id
    * @type integer | undefined int64
    */
    budgetItemId?: number | undefined;
    /**
    * @description 支出科目Id
    * @type integer | undefined int64
    */
    expenditureCatalogId?: number | undefined;
    /**
    * @description 按支出科目汇总
    * @type boolean | undefined
    */
    getSummarizedItemsByExpenditureCatalog?: boolean | undefined;
};

/**
* @description Success
*/
export type GetMonthlyBudgetStatisticDataResponse = ListResultDtoOfNameValueDtoOfDecimal;
