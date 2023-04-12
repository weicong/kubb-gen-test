import type { BudgetItemExecutionQuarter } from "./BudgetItemExecutionQuarter";

export type BudgetExecutionPlanItemEditDto = {
    /**
    * @description 支出科目Id
    * @type integer | undefined int64
    */
    expenditureCatalogId?: number | undefined;
    quarter?: BudgetItemExecutionQuarter | undefined;
    /**
    * @description 金额
    * @type number | undefined double
    */
    amount?: number | undefined;
};
