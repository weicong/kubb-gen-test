import type { HttpStatusCode } from "./HttpStatusCode";

export type GetAllSendAttemptsOfWebhookEventOutput = {
    /**
    * @description Abp.Webhooks.WebhookSendAttempt unique id
    * @type string | undefined uuid
    */
    id?: string | undefined;
    /**
    * @description Abp.Webhooks.WebhookSubscriptionInfo.WebhookUri
    * @type string | undefined
    */
    webhookUri?: string | undefined;
    /**
    * @description Abp.Webhooks.WebhookSubscription foreign id
    * @type string | undefined uuid
    */
    webhookSubscriptionId?: string | undefined;
    /**
    * @description Webhook response content that webhook endpoint send back
    * @type string | undefined
    */
    response?: string | undefined;
    responseStatusCode?: HttpStatusCode | undefined;
    /**
    * @type string | undefined date-time
    */
    creationTime?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    lastModificationTime?: string | undefined;
};
