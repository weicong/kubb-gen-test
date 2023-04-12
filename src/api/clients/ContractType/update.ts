
import client from "../../../utils/axios-client";
import type { UpdateRequest, UpdateResponse } from "../../models/ContractType/Update";

      /**
* @link /api/services/app/ContractType/Update
*/
      export function update <TData = UpdateResponse, TVariables = UpdateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/ContractType/Update`,
          data,
          
        });
      };
    