export type CreatePayAdjustInput = {
    /**
    * @description 预算计划Id
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    /**
    * @description 科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 经费id
    * @type integer | undefined int64
    */
    fundItemId?: number | undefined;
    /**
    * @description 调入季度
    * @type integer | undefined int32
    */
    inQuarter?: number | undefined;
    /**
    * @description 调出季度
    * @type integer | undefined int32
    */
    outQuarter?: number | undefined;
    /**
    * @description 调整金额
    * @type number | undefined double
    */
    adjustData?: number | undefined;
    /**
    * @description 情况说明
    * @type string | undefined
    */
    description?: string | undefined;
};
