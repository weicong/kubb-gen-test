export type BudgetDetailDto = {
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @description 预算下达类别Id
    * @type integer | undefined int64
    */
    fundCategoryId?: number | undefined;
    /**
    * @description 预算下达类别
    * @type string | undefined
    */
    fundCategoryName?: string | undefined;
    /**
    * @description 金额
    * @type number | undefined double
    */
    amount?: number | undefined;
    /**
    * @description 描述
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
