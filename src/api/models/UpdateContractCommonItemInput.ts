export type UpdateContractCommonItemInput = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
    /**
    * @description 预算项Id
    * @type integer | undefined int64
    */
    budgetItemId?: number | undefined;
    /**
    * @description 申请金额
    * @type number | undefined double
    */
    amount?: number | undefined;
    /**
    * @description 情况说明
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @description 科室日常公用id
    * @type integer | undefined int64
    */
    budgetAllocationItemOrganizationUnitId?: number | undefined;
};
