import type { SubscriptionPaymentGatewayType } from "./SubscriptionPaymentGatewayType";
import type { PaymentPeriodType } from "./PaymentPeriodType";
import type { SubscriptionPaymentStatus } from "./SubscriptionPaymentStatus";
import type { EditionPaymentType } from "./EditionPaymentType";

export type SubscriptionPaymentDto = {
    /**
    * @type string | undefined
    */
    description?: string | undefined;
    gateway?: SubscriptionPaymentGatewayType | undefined;
    /**
    * @type number | undefined double
    */
    amount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    editionId?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    dayCount?: number | undefined;
    paymentPeriodType?: PaymentPeriodType | undefined;
    /**
    * @type string | undefined
    */
    paymentId?: string | undefined;
    /**
    * @type string | undefined
    */
    payerId?: string | undefined;
    /**
    * @type string | undefined
    */
    editionDisplayName?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    invoiceNo?: number | undefined;
    status?: SubscriptionPaymentStatus | undefined;
    /**
    * @type boolean | undefined
    */
    isRecurring?: boolean | undefined;
    /**
    * @type string | undefined
    */
    externalPaymentId?: string | undefined;
    /**
    * @type string | undefined
    */
    successUrl?: string | undefined;
    /**
    * @type string | undefined
    */
    errorUrl?: string | undefined;
    editionPaymentType?: EditionPaymentType | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
