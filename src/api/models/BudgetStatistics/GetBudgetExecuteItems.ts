import type { BudgetExecuteState } from "../BudgetExecuteState";
import type { ListResultDtoOfBudgetExecuteItem } from "../ListResultDtoOfBudgetExecuteItem";

export type GetBudgetExecuteItemsQueryParams = {
    /**
    * @description 预算计划Id
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    /**
    * @description 季度
    * @type integer | undefined int32
    */
    quarter?: number | undefined;
    /**
    * @description 支出申请类型Id
    * @type integer | undefined int64
    */
    fundAllocationCategoryId?: number | undefined;
    /**
    * @description 科目Id
    * @type integer | undefined int64
    */
    fundItemId?: number | undefined;
    /**
    * @description 经费所属科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 经费使用科室
    * @type integer | undefined int64
    */
    usedByOrganizationUnitId?: number | undefined;
    /**
    * @description 名称
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @description 说明
    * @type string | undefined
    */
    description?: string | undefined;
    executeState?: BudgetExecuteState | undefined;
};

/**
* @description Success
*/
export type GetBudgetExecuteItemsResponse = ListResultDtoOfBudgetExecuteItem;
