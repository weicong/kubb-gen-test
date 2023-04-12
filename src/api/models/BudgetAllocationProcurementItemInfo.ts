export type BudgetAllocationProcurementItemInfo = {
    /**
    * @description 政采项目Id
    * @type integer | undefined int64
    */
    procurementId?: number | undefined;
    /**
    * @description 政采项目名称
    * @type string | undefined
    */
    procurementName?: string | undefined;
    /**
    * @description 采购物品Id
    * @type integer | undefined int64
    */
    id?: number | undefined;
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
    * @description 分配季度
    * @type integer | undefined int32
    */
    quarter?: number | undefined;
};
