export type GetAllSubscriptionsOutput = {
    /**
    * @description Subscription webhook endpoint
    * @type string | undefined
    */
    webhookUri?: string | undefined;
    /**
    * @description Is subscription active
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    /**
    * @description Subscribed webhook definitions unique names. Abp.Webhooks.WebhookDefinition.Name
    * @type array | undefined
    */
    webhooks?: string[] | undefined;
    /**
    * @type string | undefined uuid
    */
    id?: string | undefined;
};
