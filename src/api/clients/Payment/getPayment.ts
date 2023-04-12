
import client from "../../../utils/axios-client";
import type { GetPaymentResponse, GetPaymentQueryParams } from "../../models/Payment/GetPayment";

      /**
* @link /api/services/app/Payment/GetPayment
*/
      export function getPayment <TData = GetPaymentResponse>( params?: GetPaymentQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Payment/GetPayment`,
          params,
        });
      };
    