export type UpdateOrganizationUnitInput = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
    /**
    * @type string
    */
    displayName: string;
    /**
    * @description 排序号
    * @type integer | undefined int32
    */
    orderNumber?: number | undefined;
    /**
    * @description 组织代码
    * @type string | undefined
    */
    displayCode?: string | undefined;
    /**
    * @description 描述
    * @type string | undefined
    */
    description?: string | undefined;
};
