
import client from "../../../utils/axios-client";
import type { GetTicketStatsResponse, GetTicketStatsQueryParams } from "../../models/TicketDetail/GetTicketStats";

      /**
* @link /api/services/app/TicketDetail/GetTicketStats
*/
      export function getTicketStats <TData = GetTicketStatsResponse>( params?: GetTicketStatsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/TicketDetail/GetTicketStats`,
          params,
        });
      };
    