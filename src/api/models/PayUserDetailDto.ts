export type PayUserDetailDto = {
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @description 科室(0或空 表示外部人员)
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 人员(0或空 表示外部人员)
    * @type integer | undefined int64
    */
    userId?: number | undefined;
    /**
    * @description 人员用户名
    * @type string | undefined
    */
    userUserName?: string | undefined;
    /**
    * @description 职务
    * @type string | undefined
    */
    userPosition?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
