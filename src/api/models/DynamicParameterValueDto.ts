export type DynamicParameterValueDto = {
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    dynamicParameterId?: number | undefined;
    /**
    * @description 值
    * @type string | undefined
    */
    value?: string | undefined;
    /**
    * @description 显示名称
    * @type string | undefined
    */
    label?: string | undefined;
    /**
    * @description 排序号
    * @type integer | undefined int32
    */
    orderNumber?: number | undefined;
    /**
    * @description 描述
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @description 是否禁用
    * @type boolean | undefined
    */
    isDisabled?: boolean | undefined;
    /**
    * @description 上级Id
    * @type integer | undefined int32
    */
    parentId?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    id?: number | undefined;
};
