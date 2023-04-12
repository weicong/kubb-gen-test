import type { WebhookEvent } from "../WebhookEvent";

export type GetQueryParams = {
    /**
    * @type string | undefined
    */
    id?: string | undefined;
};

/**
* @description Success
*/
export type GetResponse = WebhookEvent;
