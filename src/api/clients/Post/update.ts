
import client from "../../../utils/axios-client";
import type { UpdateRequest, UpdateResponse } from "../../models/Post/Update";

      /**
* @link /api/services/app/Post/Update
*/
      export function update <TData = UpdateResponse, TVariables = UpdateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/Post/Update`,
          data,
          
        });
      };
    