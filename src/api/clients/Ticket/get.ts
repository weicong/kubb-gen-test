
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/Ticket/Get";

      /**
* @link /api/services/app/Ticket/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Ticket/Get`,
          params,
        });
      };
    