import type { SubscriptionPaymentGatewayType } from "./SubscriptionPaymentGatewayType";

export type CancelPaymentDto = {
    /**
    * @type string | undefined
    */
    paymentId?: string | undefined;
    gateway?: SubscriptionPaymentGatewayType | undefined;
};
