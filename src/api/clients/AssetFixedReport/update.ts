
import client from "../../../utils/axios-client";
import type { UpdateRequest, UpdateResponse } from "../../models/AssetFixedReport/Update";

      /**
* @link /api/services/app/AssetFixedReport/Update
*/
      export function update <TData = UpdateResponse, TVariables = UpdateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/AssetFixedReport/Update`,
          data,
          
        });
      };
    