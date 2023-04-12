
import client from "../../../utils/axios-client";
import type { UpdateRequest, UpdateResponse } from "../../models/EntityDynamicParameterValue/Update";

      /**
* @link /api/services/app/EntityDynamicParameterValue/Update
*/
      export function update <TData = UpdateResponse, TVariables = UpdateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/EntityDynamicParameterValue/Update`,
          data,
          
        });
      };
    