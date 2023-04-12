export type AuthenticateResultModel = {
    /**
    * @type string | undefined
    */
    accessToken?: string | undefined;
    /**
    * @type string | undefined
    */
    encryptedAccessToken?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    expireInSeconds?: number | undefined;
    /**
    * @type boolean | undefined
    */
    shouldResetPassword?: boolean | undefined;
    /**
    * @type string | undefined
    */
    passwordResetCode?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    userId?: number | undefined;
    /**
    * @type boolean | undefined
    */
    requiresTwoFactorVerification?: boolean | undefined;
    /**
    * @type array | undefined
    */
    twoFactorAuthProviders?: string[] | undefined;
    /**
    * @type string | undefined
    */
    twoFactorRememberClientToken?: string | undefined;
    /**
    * @type string | undefined
    */
    returnUrl?: string | undefined;
    /**
    * @type string | undefined
    */
    refreshToken?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    refreshTokenExpireInSeconds?: number | undefined;
};
