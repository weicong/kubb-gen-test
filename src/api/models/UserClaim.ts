export type UserClaim = {
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    userId?: number | undefined;
    /**
    * @type string | undefined
    */
    claimType?: string | undefined;
    /**
    * @type string | undefined
    */
    claimValue?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    creationTime?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    creatorUserId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
