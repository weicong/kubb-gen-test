import type { WebhookSubscription } from "../WebhookSubscription";

export type GetSubscriptionQueryParams = {
    /**
    * @type string | undefined
    */
    subscriptionId?: string | undefined;
};

/**
* @description Success
*/
export type GetSubscriptionResponse = WebhookSubscription;
