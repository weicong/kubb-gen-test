export type BudgetExecutionModeCreateDto = {
    /**
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @type string | undefined
    */
    displayName?: string | undefined;
    /**
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @type string | undefined
    */
    color?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    orderNumber?: number | undefined;
    /**
    * @type boolean | undefined
    */
    isDefault?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    isGovernmentProcurement?: boolean | undefined;
    /**
    * @description 金额 大于等于
    * @type number | undefined double
    */
    amountGe?: number | undefined;
    /**
    * @description 金额 小于
    * @type number | undefined double
    */
    amountLt?: number | undefined;
};
