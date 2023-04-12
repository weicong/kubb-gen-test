
import client from "../../../utils/axios-client";
import type { PaymentFailedRequest, PaymentFailedResponse, PaymentFailedQueryParams } from "../../models/Payment/PaymentFailed";

      /**
* @link /api/services/app/Payment/PaymentFailed
*/
      export function paymentFailed <TData = PaymentFailedResponse, TVariables = PaymentFailedRequest>( data: TVariables, params?: PaymentFailedQueryParams) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Payment/PaymentFailed`,
          data,
          params,
        });
      };
    