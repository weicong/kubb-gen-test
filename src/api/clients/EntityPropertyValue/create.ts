
import client from "../../../utils/axios-client";
import type { CreateRequest, CreateResponse } from "../../models/EntityPropertyValue/Create";

      /**
* @link /api/services/app/EntityPropertyValue/Create
*/
      export function create <TData = CreateResponse, TVariables = CreateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/EntityPropertyValue/Create`,
          data,
          
        });
      };
    