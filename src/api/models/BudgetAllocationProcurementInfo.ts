import type { BudgetAllocationProcurementItemInfo } from "./BudgetAllocationProcurementItemInfo";

export type BudgetAllocationProcurementInfo = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
    /**
    * @description 项目名称
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @description 采购物品
    * @type array | undefined
    */
    procurementItems?: BudgetAllocationProcurementItemInfo[] | undefined;
};
