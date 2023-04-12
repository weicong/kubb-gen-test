
import client from "../../../utils/axios-client";
import type { GetPaymentResponse, GetPaymentQueryParams } from "../../models/StripePayment/GetPayment";

      /**
* @link /api/services/app/StripePayment/GetPayment
*/
      export function getPayment <TData = GetPaymentResponse>( params?: GetPaymentQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/StripePayment/GetPayment`,
          params,
        });
      };
    