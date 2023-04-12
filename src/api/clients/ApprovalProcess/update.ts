
import client from "../../../utils/axios-client";
import type { UpdateRequest, UpdateResponse } from "../../models/ApprovalProcess/Update";

      /**
* @summary 更新，完成任务 (CompleteTask)
* @link /api/services/app/ApprovalProcess/Update
*/
      export function update <TData = UpdateResponse, TVariables = UpdateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/ApprovalProcess/Update`,
          data,
          
        });
      };
    