export type BudgetExecutionModeDto = {
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
    /**
    * @description 创建人姓名
    * @type string | undefined
    */
    creatorUserName?: string | undefined;
    /**
    * @description 创建人所在科室Id
    * @type integer | undefined int64
    */
    creatorUserOrganizationUnitId?: number | undefined;
    /**
    * @description 创建人所在科室名称
    * @type string | undefined
    */
    creatorUserOrganizationUnitDisplayName?: string | undefined;
    /**
    * @description 修改人姓名
    * @type string | undefined
    */
    lastModifierUserName?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    lastModificationTime?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    lastModifierUserId?: number | undefined;
    /**
    * @type string | undefined date-time
    */
    creationTime?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    creatorUserId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
