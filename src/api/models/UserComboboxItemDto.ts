export type UserComboboxItemDto = {
    /**
    * @description 所在科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 二级科室Id
    * @type integer | undefined int64
    */
    secondaryOrganizationUnitId?: number | undefined;
    /**
    * @description 职务
    * @type string | undefined
    */
    userPosition?: string | undefined;
    /**
    * @type string | undefined
    */
    value?: string | undefined;
    /**
    * @type string | undefined
    */
    displayText?: string | undefined;
    /**
    * @type boolean | undefined
    */
    isSelected?: boolean | undefined;
};
