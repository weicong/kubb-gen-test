export type CreatePayAddInput = {
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
    * @description 追加季度
    * @type integer | undefined int32
    */
    quarter?: number | undefined;
    /**
    * @description 追加金额
    * @type number | undefined double
    */
    addData?: number | undefined;
    /**
    * @description 情况说明
    * @type string | undefined
    */
    description?: string | undefined;
};
