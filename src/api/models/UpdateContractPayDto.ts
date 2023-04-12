export type UpdateContractPayDto = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
    /**
    * @description 情况说明（审批单）
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @description 合同Id
    * @type integer | undefined int64
    */
    contractId?: number | undefined;
    /**
    * @description 非政采项目（非政采情况报告单Id）
    * @type integer | undefined int64
    */
    contractCommonItemId?: number | undefined;
    /**
    * @description 政采项目分包Id
    * @type integer | undefined int64
    */
    purchasePackageItemId?: number | undefined;
    /**
    * @description 支付时间
    * @type string | undefined date-time
    */
    payTime?: string | undefined;
    /**
    * @description 支付金额
    * @type number | undefined double
    */
    payMoney?: number | undefined;
    /**
    * @description 备注
    * @type string | undefined
    */
    mark?: string | undefined;
};
