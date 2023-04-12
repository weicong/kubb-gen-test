export type ResetPasswordInput = {
    /**
    * @type integer | undefined int64
    */
    userId?: number | undefined;
    /**
    * @type string | undefined
    */
    resetCode?: string | undefined;
    /**
    * @type string | undefined
    */
    password?: string | undefined;
    /**
    * @type string | undefined
    */
    returnUrl?: string | undefined;
    /**
    * @type string | undefined
    */
    singleSignIn?: string | undefined;
    /**
    * @description Encrypted values for {TenantId}, {UserId} and {ResetCode}
    * @type string | undefined
    */
    c?: string | undefined;
};
