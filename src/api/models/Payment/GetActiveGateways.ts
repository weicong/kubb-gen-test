import type { PaymentGatewayModel } from "../PaymentGatewayModel";

export type GetActiveGatewaysQueryParams = {
    /**
    * @type boolean | undefined
    */
    recurringPaymentsEnabled?: boolean | undefined;
};

/**
* @description Success
*/
export type GetActiveGatewaysResponse = PaymentGatewayModel[];
