export type UserToken = {
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
    loginProvider?: string | undefined;
    /**
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @type string | undefined
    */
    value?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    expireDate?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
