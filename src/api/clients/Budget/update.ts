
import client from "../../../utils/axios-client";
import type { UpdateRequest, UpdateResponse } from "../../models/Budget/Update";

      /**
* @link /api/services/app/Budget/Update
*/
      export function update <TData = UpdateResponse, TVariables = UpdateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/Budget/Update`,
          data,
          
        });
      };
    