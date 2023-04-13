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
    * @type integer | undefined int64
    */
    userId?: number | undefined;
};
