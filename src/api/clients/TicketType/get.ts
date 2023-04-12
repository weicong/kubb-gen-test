
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/TicketType/Get";

      /**
* @link /api/services/app/TicketType/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/TicketType/Get`,
          params,
        });
      };
    