
import client from "../../../utils/axios-client";
import type { UpdateTicketDetailStatesRequest, UpdateTicketDetailStatesResponse } from "../../models/TicketDetail/UpdateTicketDetailStates";

      /**
* @link /api/services/app/TicketDetail/UpdateTicketDetailStates
*/
      export function updateTicketDetailStates <TData = UpdateTicketDetailStatesResponse, TVariables = UpdateTicketDetailStatesRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/TicketDetail/UpdateTicketDetailStates`,
          data,
          
        });
      };
    