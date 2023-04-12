
import client from "../../../utils/axios-client";
import type { AddRequest, AddResponse } from "../../models/EntityDynamicParameter/Add";

      /**
* @link /api/services/app/EntityDynamicParameter/Add
*/
      export function add <TData = AddResponse, TVariables = AddRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/EntityDynamicParameter/Add`,
          data,
          
        });
      };
    