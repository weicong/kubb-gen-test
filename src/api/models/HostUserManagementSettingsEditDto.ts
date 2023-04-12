import type { SessionTimeOutSettingsEditDto } from "./SessionTimeOutSettingsEditDto";

export type HostUserManagementSettingsEditDto = {
    /**
    * @type boolean | undefined
    */
    isEmailConfirmationRequiredForLogin?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    smsVerificationEnabled?: boolean | undefined;
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
    useCaptchaOnLogin?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    allowUsingGravatarProfilePicture?: boolean | undefined;
    sessionTimeOutSettings?: SessionTimeOutSettingsEditDto | undefined;
};
