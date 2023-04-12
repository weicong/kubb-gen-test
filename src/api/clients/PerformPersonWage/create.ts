
import client from "../../../utils/axios-client";
import type { CreateRequest, CreateResponse } from "../../models/PerformPersonWage/Create";

      /**
* @link /api/services/app/PerformPersonWage/Create
*/
      export function create <TData = CreateResponse, TVariables = CreateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/PerformPersonWage/Create`,
          data,
          
        });
      };
    