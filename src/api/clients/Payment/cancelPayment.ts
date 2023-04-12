
import client from "../../../utils/axios-client";
import type { CancelPaymentRequest, CancelPaymentResponse } from "../../models/Payment/CancelPayment";

      /**
* @link /api/services/app/Payment/CancelPayment
*/
      export function cancelPayment <TData = CancelPaymentResponse, TVariables = CancelPaymentRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Payment/CancelPayment`,
          data,
          
        });
      };
    