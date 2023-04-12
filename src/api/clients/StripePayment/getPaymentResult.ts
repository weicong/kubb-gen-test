
import client from "../../../utils/axios-client";
import type { GetPaymentResultResponse, GetPaymentResultQueryParams } from "../../models/StripePayment/GetPaymentResult";

      /**
* @link /api/services/app/StripePayment/GetPaymentResult
*/
      export function getPaymentResult <TData = GetPaymentResultResponse>( params?: GetPaymentResultQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/StripePayment/GetPaymentResult`,
          params,
        });
      };
    