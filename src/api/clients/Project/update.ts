
import client from "../../../utils/axios-client";
import type { UpdateRequest, UpdateResponse } from "../../models/Project/Update";

      /**
* @link /api/services/app/Project/Update
*/
      export function update <TData = UpdateResponse, TVariables = UpdateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/Project/Update`,
          data,
          
        });
      };
    