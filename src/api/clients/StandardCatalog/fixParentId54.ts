
import client from "../../../utils/axios-client";
import type { FixParentId54Request, FixParentId54Response } from "../../models/StandardCatalog/FixParentId54";

      /**
* @link /api/services/app/StandardCatalog/FixParentId54
*/
      export function fixParentId54 <TData = FixParentId54Response, TVariables = FixParentId54Request>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/StandardCatalog/FixParentId54`,
          data,
          
        });
      };
    