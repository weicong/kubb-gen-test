import type { HttpStatusCode } from "./HttpStatusCode";

export type GetAllSendAttemptsOutput = {
    /**
    * @type string | undefined uuid
    */
    id?: string | undefined;
    /**
    * @description Abp.Webhooks.WebhookEvent foreign id
    * @type string | undefined uuid
    */
    webhookEventId?: string | undefined;
    /**
    * @description Webhook unique name Abp.Webhooks.WebhookDefinition.Name
    * @type string | undefined
    */
    webhookName?: string | undefined;
    /**
    * @description Webhook data as JSON string.
    * @type string | undefined
    */
    data?: string | undefined;
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
};
