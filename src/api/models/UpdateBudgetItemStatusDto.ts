export type UpdateBudgetItemStatusDto = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
    /**
    * @description 使用科室Id
    * @type integer | undefined int64
    */
    usingOrganizationUnitId?: number | undefined;
    /**
    * @description 全部科室可用
    * @type boolean | undefined
    */
    isShared?: boolean | undefined;
    /**
    * @description 共享使用科室Id（以逗号分隔）
    * @type string | undefined
    */
    usingOrganizationUnitIds?: string | undefined;
    /**
    * @description 是否为预留
    * @type boolean | undefined
    */
    isReserved?: boolean | undefined;
    /**
    * @description 已禁用
    * @type boolean | undefined
    */
    isDisabled?: boolean | undefined;
    /**
    * @description 备注
    * @type string | undefined
    */
    description?: string | undefined;
};
