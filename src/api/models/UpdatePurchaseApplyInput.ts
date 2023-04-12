export type UpdatePurchaseApplyInput = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    budgetAllocationProcurementItemId?: number | undefined;
    /**
    * @description 预算项Id
    * @type integer | undefined int64
    */
    budgetItemId?: number | undefined;
    /**
    * @description 使用科室
    * @type integer | undefined int64
    */
    usageOrganizationUnitId?: number | undefined;
    /**
    * @description 情况说明
    * @type string | undefined
    */
    description?: string | undefined;
};
