import type { SessionTimeOutSettingsEditDto } from "./SessionTimeOutSettingsEditDto";

export type TenantUserManagementSettingsEditDto = {
    /**
    * @type boolean | undefined
    */
    allowSelfRegistration?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    isNewRegisteredUserActiveByDefault?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    isEmailConfirmationRequiredForLogin?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    useCaptchaOnRegistration?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    useCaptchaOnLogin?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    isCookieConsentEnabled?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    isQuickThemeSelectEnabled?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    allowUsingGravatarProfilePicture?: boolean | undefined;
    sessionTimeOutSettings?: SessionTimeOutSettingsEditDto | undefined;
};
