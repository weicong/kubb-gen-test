import type { BudgetState } from "./BudgetState";

export type CreateBudgetAllocationProcurementItemDto = {
    /**
    * @type integer | undefined int64
    */
    budgetAllocationProcurementId?: number | undefined;
    /**
    * @description 科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 分配季度
    * @type integer | undefined int32
    */
    quarter?: number | undefined;
    /**
    * @description 采购序号
    * @type string | undefined
    */
    orderNumber?: string | undefined;
    /**
    * @description 采购物品名称
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @description 单价
    * @type number | undefined double
    */
    unitPrice?: number | undefined;
    /**
    * @description 数量
    * @type number | undefined double
    */
    quantity?: number | undefined;
    /**
    * @description 单位
    * @type string | undefined
    */
    unit?: string | undefined;
    /**
    * @description 总价
    * @type number | undefined double
    */
    totalPrice?: number | undefined;
    /**
    * @description 说明
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @description 备注
    * @type string | undefined
    */
    remark?: string | undefined;
    /**
    * @description 定稿
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    /**
    * @description 项目 分解Id
    * @type integer | undefined int64
    */
    budgetAllocationProcurementBudgetAllocationId?: number | undefined;
    /**
    * @description 公用经费科目Id
    * @type integer | undefined int64
    */
    budgetAllocationProcurementFundItemId?: number | undefined;
    budgetAllocationProcurementState?: BudgetState | undefined;
};
