
import client from "../../../utils/axios-client";
import type { HasAnyPaymentRequest, HasAnyPaymentResponse } from "../../models/Payment/HasAnyPayment";

      /**
* @link /api/services/app/Payment/HasAnyPayment
*/
      export function hasAnyPayment <TData = HasAnyPaymentResponse, TVariables = HasAnyPaymentRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Payment/HasAnyPayment`,
          data,
          
        });
      };
    