import type { SubscriptionPaymentDto } from "../SubscriptionPaymentDto";

export type GetPaymentQueryParams = {
    /**
    * @type integer | undefined int64
    */
    paymentId?: number | undefined;
};

/**
* @description Success
*/
export type GetPaymentResponse = SubscriptionPaymentDto;
