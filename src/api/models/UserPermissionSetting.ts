export type UserPermissionSetting = {
    /**
    * @type integer | undefined int64
    */
    userId?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @type string
    */
    name: string;
    /**
    * @type boolean | undefined
    */
    isGranted?: boolean | undefined;
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
