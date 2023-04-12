export type WebhookEvent = {
    /**
    * @type string
    */
    webhookName: string;
    /**
    * @type string | undefined
    */
    data?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    creationTime?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @type boolean | undefined
    */
    isDeleted?: boolean | undefined;
    /**
    * @type string | undefined date-time
    */
    deletionTime?: string | undefined;
    /**
    * @type string | undefined uuid
    */
    id?: string | undefined;
};
