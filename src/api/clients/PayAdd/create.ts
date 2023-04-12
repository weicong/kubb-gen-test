
import client from "../../../utils/axios-client";
import type { CreateRequest, CreateResponse } from "../../models/PayAdd/Create";

      /**
* @link /api/services/app/PayAdd/Create
*/
      export function create <TData = CreateResponse, TVariables = CreateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/PayAdd/Create`,
          data,
          
        });
      };
    