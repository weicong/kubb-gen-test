
import client from "../../../utils/axios-client";
import type { FixCodeName53Request, FixCodeName53Response } from "../../models/StandardCatalog/FixCodeName53";

      /**
* @link /api/services/app/StandardCatalog/FixCodeName53
*/
      export function fixCodeName53 <TData = FixCodeName53Response, TVariables = FixCodeName53Request>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/StandardCatalog/FixCodeName53`,
          data,
          
        });
      };
    