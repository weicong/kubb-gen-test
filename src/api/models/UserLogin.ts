export type UserLogin = {
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    userId?: number | undefined;
    /**
    * @type string
    */
    loginProvider: string;
    /**
    * @type string
    */
    providerKey: string;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
