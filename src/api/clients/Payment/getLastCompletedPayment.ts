
import client from "../../../utils/axios-client";
import type { GetLastCompletedPaymentResponse } from "../../models/Payment/GetLastCompletedPayment";

      /**
* @link /api/services/app/Payment/GetLastCompletedPayment
*/
      export function getLastCompletedPayment <TData = GetLastCompletedPaymentResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Payment/GetLastCompletedPayment`,
          
        });
      };
    