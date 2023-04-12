export type ExternalAuthenticateResultModel = {
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
    waitingForActivation?: boolean | undefined;
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
