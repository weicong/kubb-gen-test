
import client from "../../../utils/axios-client";
import type { UpdateRequest, UpdateResponse } from "../../models/EntityPropertyValue/Update";

      /**
* @link /api/services/app/EntityPropertyValue/Update
*/
      export function update <TData = UpdateResponse, TVariables = UpdateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/EntityPropertyValue/Update`,
          data,
          
        });
      };
    