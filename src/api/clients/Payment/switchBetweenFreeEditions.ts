
import client from "../../../utils/axios-client";
import type { SwitchBetweenFreeEditionsRequest, SwitchBetweenFreeEditionsResponse, SwitchBetweenFreeEditionsQueryParams } from "../../models/Payment/SwitchBetweenFreeEditions";

      /**
* @link /api/services/app/Payment/SwitchBetweenFreeEditions
*/
      export function switchBetweenFreeEditions <TData = SwitchBetweenFreeEditionsResponse, TVariables = SwitchBetweenFreeEditionsRequest>( data: TVariables, params?: SwitchBetweenFreeEditionsQueryParams) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Payment/SwitchBetweenFreeEditions`,
          data,
          params,
        });
      };
    