export type PayBillDetailDto = {
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @description 预算项Id
    * @type integer | undefined int64
    */
    budgetItemId?: number | undefined;
    /**
    * @description 预算项支出科目名称
    * @type string | undefined
    */
    budgetItemExpenditureCatalogName?: string | undefined;
    /**
    * @description 预算项支出科目完整名称
    * @type string | undefined
    */
    budgetItemExpenditureCatalogFullName?: string | undefined;
    /**
    * @description 事后报销：发生时间
    * @type string | undefined date-time
    */
    occurTime?: string | undefined;
    /**
    * @description 申请金额
    * @type number | undefined double
    */
    applyData?: number | undefined;
    /**
    * @description 报销金额
    * @type number | undefined double
    */
    payData?: number | undefined;
    /**
    * @description 经费Id
    * @type integer | undefined int64
    */
    fundItemId?: number | undefined;
    /**
    * @type string | undefined
    */
    fundItemName?: string | undefined;
    /**
    * @type string | undefined
    */
    fundItemFullName?: string | undefined;
    /**
    * @description 情况说明
    * @type string | undefined
    */
    remark?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    state?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
