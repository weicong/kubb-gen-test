
import client from "../../../utils/axios-client";
import type { CreateRequest, CreateResponse } from "../../models/PayAdjust/Create";

      /**
* @link /api/services/app/PayAdjust/Create
*/
      export function create <TData = CreateResponse, TVariables = CreateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/PayAdjust/Create`,
          data,
          
        });
      };
    