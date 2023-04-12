
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/TicketDetail/Get";

      /**
* @link /api/services/app/TicketDetail/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/TicketDetail/Get`,
          params,
        });
      };
    