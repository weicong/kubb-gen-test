export type OrganizationUnitInfoDto = {
    /**
    * @description 科室Id
    * @type integer | undefined int64
    */
    id?: number | undefined;
    /**
    * @description 科室名称
    * @type string | undefined
    */
    displayName?: string | undefined;
    /**
    * @description 科室类别
    * @type string | undefined
    */
    "type"?: string | undefined;
    /**
    * @description 业务考核
    * @type number | undefined double
    */
    coefficient1?: number | undefined;
    /**
    * @description 党建考核
    * @type number | undefined double
    */
    coefficient2?: number | undefined;
};
