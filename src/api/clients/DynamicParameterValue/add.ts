
import client from "../../../utils/axios-client";
import type { AddRequest, AddResponse } from "../../models/DynamicParameterValue/Add";

      /**
* @link /api/services/app/DynamicParameterValue/Add
*/
      export function add <TData = AddResponse, TVariables = AddRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/DynamicParameterValue/Add`,
          data,
          
        });
      };
    