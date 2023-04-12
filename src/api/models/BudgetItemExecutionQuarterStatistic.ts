import type { BudgetItemDto } from "./BudgetItemDto";

export type BudgetItemExecutionQuarterStatistic = {
    /**
    * @description 支出科目Id
    * @type integer | undefined int64
    */
    expenditureCatalogId?: number | undefined;
    /**
    * @description 支出科目名称
    * @type string | undefined
    */
    expenditureCatalogName?: string | undefined;
    /**
    * @description 支出科目完整名称
    * @type string | undefined
    */
    expenditureCatalogFullName?: string | undefined;
    /**
    * @description 预算项
    * @type array | undefined
    */
    budgetItemList?: BudgetItemDto[] | undefined;
    /**
    * @description 预算项数
    * @type integer | undefined int32
    */
    budgetItemCount?: number | undefined;
    /**
    * @description 预算金额
    * @type number | undefined double
    */
    totalAmount?: number | undefined;
    /**
    * @description 预算金额Q1
    * @type number | undefined double
    */
    totalAmountInQ1?: number | undefined;
    /**
    * @description 预算金额Q2
    * @type number | undefined double
    */
    totalAmountInQ2?: number | undefined;
    /**
    * @description 预算金额Q3
    * @type number | undefined double
    */
    totalAmountInQ3?: number | undefined;
    /**
    * @description 预算金额Q4
    * @type number | undefined double
    */
    totalAmountInQ4?: number | undefined;
    /**
    * @description 未款分解预算金额
    * @type number | undefined double
    */
    totalAmountUndefined?: number | undefined;
};
