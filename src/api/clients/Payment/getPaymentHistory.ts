
import client from "../../../utils/axios-client";
import type { GetPaymentHistoryResponse, GetPaymentHistoryQueryParams } from "../../models/Payment/GetPaymentHistory";

      /**
* @link /api/services/app/Payment/GetPaymentHistory
*/
      export function getPaymentHistory <TData = GetPaymentHistoryResponse>( params?: GetPaymentHistoryQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Payment/GetPaymentHistory`,
          params,
        });
      };
    