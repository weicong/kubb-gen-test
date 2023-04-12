export type UserEditDto = {
    /**
    * @description Set null to create a new user. Set user's Id to update a user
    * @type integer | undefined int64
    */
    id?: number | undefined;
    /**
    * @type string
    */
    name: string;
    /**
    * @type string
    */
    surname: string;
    /**
    * @type string
    */
    userName: string;
    /**
    * @type string email
    */
    emailAddress: string;
    /**
    * @type string | undefined
    */
    phoneNumber?: string | undefined;
    /**
    * @type string | undefined
    */
    password?: string | undefined;
    /**
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    shouldChangePasswordOnNextLogin?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    isTwoFactorEnabled?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    isLockoutEnabled?: boolean | undefined;
    /**
    * @description 性别
    * @type string | undefined
    */
    gender?: string | undefined;
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
    position?: string | undefined;
    /**
    * @description 职称
    * @type string | undefined
    */
    title?: string | undefined;
    /**
    * @description 简介
    * @type string | undefined
    */
    biography?: string | undefined;
};
