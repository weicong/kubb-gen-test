
import client from "../../../utils/axios-client";
import type { CreateRequest, CreateResponse } from "../../models/StandardCatalog/Create";

      /**
* @link /api/services/app/StandardCatalog/Create
*/
      export function create <TData = CreateResponse, TVariables = CreateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/StandardCatalog/Create`,
          data,
          
        });
      };
    