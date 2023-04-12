export type TenantManagementSettingsEditDto = {
    /**
    * @type boolean | undefined
    */
    allowSelfRegistration?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    isNewRegisteredTenantActiveByDefault?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    useCaptchaOnRegistration?: boolean | undefined;
    /**
    * @type integer | undefined int32
    */
    defaultEditionId?: number | undefined;
};
