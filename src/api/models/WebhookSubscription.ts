export type WebhookSubscription = {
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @type string | undefined
    */
    webhookUri?: string | undefined;
    /**
    * @type string | undefined
    */
    secret?: string | undefined;
    /**
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    /**
    * @type array | undefined
    */
    webhooks?: string[] | undefined;
    /**
    * @type object | undefined
    */
    headers?: {
        [key: string]: string;
    } | undefined;
    /**
    * @type string | undefined uuid
    */
    id?: string | undefined;
};
