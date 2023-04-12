import type { PagedResultDtoOfBudgetItemDto } from "../PagedResultDtoOfBudgetItemDto";
import type { BudgetItemExecutionQuarter } from "../BudgetItemExecutionQuarter";
import type { BudgetItemType } from "../BudgetItemType";

/**
* @description Success
*/
export type GetAllResponse = PagedResultDtoOfBudgetItemDto;

export type GetAllQueryParams = {
    /**
    * @description 预算计划Id
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    /**
    * @description 预算编制Id
    * @type integer | undefined int64
    */
    budgetId?: number | undefined;
    /**
    * @description 预算调整审批单Id
    * @type integer | undefined int64
    */
    budgetAdjustmentId?: number | undefined;
    /**
    * @description 是否为预留
    * @type boolean | undefined
    */
    isReserved?: boolean | undefined;
    /**
    * @description 使用科室Id
    * @type integer | undefined int64
    */
    usingOrganizationUnitId?: number | undefined;
    /**
    * @description 包含共享项
    * @type boolean | undefined
    */
    includeShared?: boolean | undefined;
    executionQuarter?: BudgetItemExecutionQuarter | undefined;
    /**
    * @description 包含已驳回或已禁用的项
    * @type boolean | undefined
    */
    includeUnavailable?: boolean | undefined;
    /**
    * @description 支出科目Id
    * @type integer | undefined int64
    */
    expenditureCatalogId?: number | undefined;
    /**
    * @description 支出申请类型Id
    * @type integer | undefined int64
    */
    expenditureCatalogExpenditureClassificationId?: number | undefined;
    "type"?: BudgetItemType | undefined;
    /**
    * @description 预算执行类型Id
    * @type integer | undefined int64
    */
    budgetExecutionModeId?: number | undefined;
    /**
    * @description 申报科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
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
