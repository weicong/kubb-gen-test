export type BudgetAllocationItemFundSourceDto = {
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    budgetAllocationItemId?: number | undefined;
    /**
    * @description 资金来源Id
    * @type integer | undefined int64
    */
    fundSourceId?: number | undefined;
    /**
    * @description 资金来源
    * @type string | undefined
    */
    fundSourceName?: string | undefined;
    /**
    * @description 金额
    * @type number | undefined double
    */
    amount?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
