export type Setting = {
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
    name: string;
    /**
    * @type string | undefined
    */
    value?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    lastModificationTime?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    lastModifierUserId?: number | undefined;
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
