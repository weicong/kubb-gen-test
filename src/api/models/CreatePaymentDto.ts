import type { EditionPaymentType } from "./EditionPaymentType";
import type { PaymentPeriodType } from "./PaymentPeriodType";
import type { SubscriptionPaymentGatewayType } from "./SubscriptionPaymentGatewayType";

export type CreatePaymentDto = {
    /**
    * @type integer | undefined int32
    */
    editionId?: number | undefined;
    editionPaymentType?: EditionPaymentType | undefined;
    paymentPeriodType?: PaymentPeriodType | undefined;
    subscriptionPaymentGatewayType?: SubscriptionPaymentGatewayType | undefined;
    /**
    * @type boolean | undefined
    */
    recurringPaymentEnabled?: boolean | undefined;
    /**
    * @type string | undefined
    */
    successUrl?: string | undefined;
    /**
    * @type string | undefined
    */
    errorUrl?: string | undefined;
};
