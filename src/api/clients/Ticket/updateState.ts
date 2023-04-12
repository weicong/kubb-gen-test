
import client from "../../../utils/axios-client";
import type { UpdateStateRequest, UpdateStateResponse } from "../../models/Ticket/UpdateState";

      /**
* @summary 更新票据状态（核销）
* @link /api/services/app/Ticket/UpdateState
*/
      export function updateState <TData = UpdateStateResponse, TVariables = UpdateStateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/Ticket/UpdateState`,
          data,
          
        });
      };
    