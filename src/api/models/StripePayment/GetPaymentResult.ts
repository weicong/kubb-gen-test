import type { StripePaymentResultOutput } from "../StripePaymentResultOutput";

export type GetPaymentResultQueryParams = {
    /**
    * @type integer | undefined int64
    */
    paymentId?: number | undefined;
};

/**
* @description Success
*/
export type GetPaymentResultResponse = StripePaymentResultOutput;
