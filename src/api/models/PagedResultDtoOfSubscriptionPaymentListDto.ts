import type { SubscriptionPaymentListDto } from "./SubscriptionPaymentListDto";

export type PagedResultDtoOfSubscriptionPaymentListDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: SubscriptionPaymentListDto[] | undefined;
};
