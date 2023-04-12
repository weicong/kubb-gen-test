export type AuthenticateModel = {
    /**
    * @type string
    */
    userNameOrEmailAddress: string;
    /**
    * @type string
    */
    password: string;
    /**
    * @type string | undefined
    */
    twoFactorVerificationCode?: string | undefined;
    /**
    * @type boolean | undefined
    */
    rememberClient?: boolean | undefined;
    /**
    * @type string | undefined
    */
    twoFactorRememberClientToken?: string | undefined;
    /**
    * @type boolean | undefined
    */
    singleSignIn?: boolean | undefined;
    /**
    * @type string | undefined
    */
    returnUrl?: string | undefined;
    /**
    * @type string | undefined
    */
    captchaResponse?: string | undefined;
};
