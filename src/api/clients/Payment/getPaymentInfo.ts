
import client from "../../../utils/axios-client";
import type { GetPaymentInfoResponse, GetPaymentInfoQueryParams } from "../../models/Payment/GetPaymentInfo";

      /**
* @link /api/services/app/Payment/GetPaymentInfo
*/
      export function getPaymentInfo <TData = GetPaymentInfoResponse>( params?: GetPaymentInfoQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Payment/GetPaymentInfo`,
          params,
        });
      };
    