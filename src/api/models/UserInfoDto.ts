export type UserInfoDto = {
    /**
    * @description 用户Id
    * @type integer | undefined int64
    */
    id?: number | undefined;
    /**
    * @description 所在科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 科室名称
    * @type string | undefined
    */
    organizationUnitDisplayName?: string | undefined;
    /**
    * @description 二级科室Id
    * @type integer | undefined int64
    */
    secondaryOrganizationUnitId?: number | undefined;
    /**
    * @description 二级科室名称
    * @type string | undefined
    */
    secondaryOrganizationUnitDisplayName?: string | undefined;
    /**
    * @description 姓名
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @description 序号
    * @type integer | undefined int32
    */
    orderNumber?: number | undefined;
    /**
    * @description 职工类别
    * @type string | undefined
    */
    postType?: string | undefined;
    /**
    * @description 职工级别（是否中层）
    * @type string | undefined
    */
    postLevel?: string | undefined;
    /**
    * @description 身份证号
    * @type string | undefined
    */
    idCardNumber?: string | undefined;
    /**
    * @description 银行卡号
    * @type string | undefined
    */
    bankCardNumber?: string | undefined;
    /**
    * @description 基础任务人员系数
    * @type number | undefined double
    */
    coefficient1?: number | undefined;
    /**
    * @description 责任津贴人员系数
    * @type number | undefined double
    */
    coefficient2?: number | undefined;
    /**
    * @description 通讯费标准
    * @type number | undefined double
    */
    coefficient3?: number | undefined;
};
