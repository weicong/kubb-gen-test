
import client from "../../../utils/axios-client";
import type { GetConfigurationResponse } from "../../models/StripePayment/GetConfiguration";

      /**
* @link /api/services/app/StripePayment/GetConfiguration
*/
      export function getConfiguration <TData = GetConfigurationResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/StripePayment/GetConfiguration`,
          
        });
      };
    