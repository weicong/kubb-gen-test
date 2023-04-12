export type UserLoginAttemptDto = {
    /**
    * @type string | undefined
    */
    tenancyName?: string | undefined;
    /**
    * @type string | undefined
    */
    userNameOrEmail?: string | undefined;
    /**
    * @type string | undefined
    */
    clientIpAddress?: string | undefined;
    /**
    * @type string | undefined
    */
    clientName?: string | undefined;
    /**
    * @type string | undefined
    */
    browserInfo?: string | undefined;
    /**
    * @type string | undefined
    */
    result?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    creationTime?: string | undefined;
};
