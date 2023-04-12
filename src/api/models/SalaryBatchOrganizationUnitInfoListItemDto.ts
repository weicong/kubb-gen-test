export type SalaryBatchOrganizationUnitInfoListItemDto = {
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @description 科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 科室名称
    * @type string | undefined
    */
    organizationUnitDisplayName?: string | undefined;
    /**
    * @description 科室排序号
    * @type integer | undefined int32
    */
    organizationUnitOrderNumber?: number | undefined;
    /**
    * @description 科室类别
    * @type string | undefined
    */
    organizationUnitType?: string | undefined;
    /**
    * @description 奖励分
    * @type number | undefined double
    */
    coefficient1?: number | undefined;
    /**
    * @description 惩罚分
    * @type number | undefined double
    */
    coefficient2?: number | undefined;
    /**
    * @description 其他补款
    * @type number | undefined double
    */
    coefficient3?: number | undefined;
    /**
    * @description 其他补款N
    * @type number | undefined double
    */
    coefficient3N?: number | undefined;
    /**
    * @description 系数描述
    * @type string | undefined
    */
    coefficientDescription?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
