
import client from "../../../utils/axios-client";
import type { GetActiveGatewaysResponse, GetActiveGatewaysQueryParams } from "../../models/Payment/GetActiveGateways";

      /**
* @link /api/services/app/Payment/GetActiveGateways
*/
      export function getActiveGateways <TData = GetActiveGatewaysResponse>( params?: GetActiveGatewaysQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Payment/GetActiveGateways`,
          params,
        });
      };
    