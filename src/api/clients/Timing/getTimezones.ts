
import client from "../../../utils/axios-client";
import type { GetTimezonesResponse, GetTimezonesQueryParams } from "../../models/Timing/GetTimezones";

      /**
* @link /api/services/app/Timing/GetTimezones
*/
      export function getTimezones <TData = GetTimezonesResponse>( params?: GetTimezonesQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Timing/GetTimezones`,
          params,
        });
      };
    