
import client from "../../../utils/axios-client";
import type { GetConfigurationResponse } from "../../models/PayPalPayment/GetConfiguration";

      /**
* @link /api/services/app/PayPalPayment/GetConfiguration
*/
      export function getConfiguration <TData = GetConfigurationResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/PayPalPayment/GetConfiguration`,
          
        });
      };
    