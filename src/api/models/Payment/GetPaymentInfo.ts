import type { PaymentInfoDto } from "../PaymentInfoDto";

export type GetPaymentInfoQueryParams = {
    /**
    * @type integer | undefined int32
    */
    upgradeEditionId?: number | undefined;
};

/**
* @description Success
*/
export type GetPaymentInfoResponse = PaymentInfoDto;
