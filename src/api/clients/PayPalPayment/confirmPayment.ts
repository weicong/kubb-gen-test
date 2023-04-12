
import client from "../../../utils/axios-client";
import type { ConfirmPaymentRequest, ConfirmPaymentResponse, ConfirmPaymentQueryParams } from "../../models/PayPalPayment/ConfirmPayment";

      /**
* @link /api/services/app/PayPalPayment/ConfirmPayment
*/
      export function confirmPayment <TData = ConfirmPaymentResponse, TVariables = ConfirmPaymentRequest>( data: TVariables, params?: ConfirmPaymentQueryParams) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/PayPalPayment/ConfirmPayment`,
          data,
          params,
        });
      };
    