import type { SubscriptionPaymentDto } from "../SubscriptionPaymentDto";

export type GetPaymentQueryParams = {
    /**
    * @type string | undefined
    */
    stripeSessionId?: string | undefined;
};

/**
* @description Success
*/
export type GetPaymentResponse = SubscriptionPaymentDto;
