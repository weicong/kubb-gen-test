import type { BudgetAllocationItemFundSourceDto } from "./BudgetAllocationItemFundSourceDto";

export type CreateOrUpdateBudgetAllocationItemDto = {
    /**
    * @type integer | undefined int64
    */
    budgetAllocationId?: number | undefined;
    /**
    * @description 科目Id
    * @type integer | undefined int64
    */
    fundItemId?: number | undefined;
    /**
    * @description 预算金额合计
    * @type number | undefined double
    */
    amount?: number | undefined;
    /**
    * @description 支出申请类型Id（以逗号分隔）
    * @type string | undefined
    */
    expenditureClassificationIds?: string | undefined;
    /**
    * @description 支出申请类型Id列表
    * @type array | undefined
    */
    expenditureClassificationIdList?: number[] | undefined;
    /**
    * @type array | undefined
    */
    budgetAllocationItemFundSources?: BudgetAllocationItemFundSourceDto[] | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
