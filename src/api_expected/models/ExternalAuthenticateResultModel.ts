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
};
