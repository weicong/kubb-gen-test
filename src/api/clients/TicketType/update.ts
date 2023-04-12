
import client from "../../../utils/axios-client";
import type { UpdateRequest, UpdateResponse } from "../../models/TicketType/Update";

      /**
* @link /api/services/app/TicketType/Update
*/
      export function update <TData = UpdateResponse, TVariables = UpdateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/TicketType/Update`,
          data,
          
        });
      };
    