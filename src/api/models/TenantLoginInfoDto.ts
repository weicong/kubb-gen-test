import type { SubscriptionPaymentType } from "./SubscriptionPaymentType";
import type { EditionInfoDto } from "./EditionInfoDto";
import type { PaymentPeriodType } from "./PaymentPeriodType";

export type TenantLoginInfoDto = {
    /**
    * @type string | undefined
    */
    tenancyName?: string | undefined;
    /**
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @type string | undefined uuid
    */
    logoId?: string | undefined;
    /**
    * @type string | undefined
    */
    logoFileType?: string | undefined;
    /**
    * @type string | undefined uuid
    */
    customCssId?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    subscriptionEndDateUtc?: string | undefined;
    /**
    * @type boolean | undefined
    */
    isInTrialPeriod?: boolean | undefined;
    subscriptionPaymentType?: SubscriptionPaymentType | undefined;
    edition?: EditionInfoDto | undefined;
    /**
    * @type string | undefined date-time
    */
    creationTime?: string | undefined;
    paymentPeriodType?: PaymentPeriodType | undefined;
    /**
    * @type string | undefined
    */
    subscriptionDateString?: string | undefined;
    /**
    * @type string | undefined
    */
    creationTimeString?: string | undefined;
    /**
    * @description 服务即将到期
    * @type boolean | undefined
    */
    isExpiringSoon?: boolean | undefined;
    /**
    * @description 服务已过期
    * @type boolean | undefined
    */
    isExpired?: boolean | undefined;
    /**
    * @description 服务有效期限（天）
    * @type integer | undefined int32
    */
    expiringDayCount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    id?: number | undefined;
};
