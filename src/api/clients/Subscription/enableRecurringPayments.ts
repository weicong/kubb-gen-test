
import client from "../../../utils/axios-client";
import type { EnableRecurringPaymentsRequest, EnableRecurringPaymentsResponse } from "../../models/Subscription/EnableRecurringPayments";

      /**
* @link /api/services/app/Subscription/EnableRecurringPayments
*/
      export function enableRecurringPayments <TData = EnableRecurringPaymentsResponse, TVariables = EnableRecurringPaymentsRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Subscription/EnableRecurringPayments`,
          data,
          
        });
      };
    