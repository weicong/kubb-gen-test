import type { SubscriptionPaymentGatewayType } from "./SubscriptionPaymentGatewayType";

export type PaymentGatewayModel = {
    gatewayType?: SubscriptionPaymentGatewayType | undefined;
    /**
    * @type boolean | undefined
    */
    supportsRecurringPayments?: boolean | undefined;
};
