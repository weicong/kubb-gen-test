export type AuditLogListDto = {
    /**
    * @type integer | undefined int64
    */
    userId?: number | undefined;
    /**
    * @type string | undefined
    */
    userName?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    impersonatorTenantId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    impersonatorUserId?: number | undefined;
    /**
    * @type string | undefined
    */
    serviceName?: string | undefined;
    /**
    * @type string | undefined
    */
    methodName?: string | undefined;
    /**
    * @type string | undefined
    */
    parameters?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    executionTime?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    executionDuration?: number | undefined;
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
    exception?: string | undefined;
    /**
    * @type string | undefined
    */
    customData?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
