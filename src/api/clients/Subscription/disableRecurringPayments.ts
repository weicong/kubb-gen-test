
import client from "../../../utils/axios-client";
import type { DisableRecurringPaymentsRequest, DisableRecurringPaymentsResponse } from "../../models/Subscription/DisableRecurringPayments";

      /**
* @link /api/services/app/Subscription/DisableRecurringPayments
*/
      export function disableRecurringPayments <TData = DisableRecurringPaymentsResponse, TVariables = DisableRecurringPaymentsRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Subscription/DisableRecurringPayments`,
          data,
          
        });
      };
    