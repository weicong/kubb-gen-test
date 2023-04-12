
import client from "../../../utils/axios-client";
import type { FixParentId53Request, FixParentId53Response } from "../../models/StandardCatalog/FixParentId53";

      /**
* @link /api/services/app/StandardCatalog/FixParentId53
*/
      export function fixParentId53 <TData = FixParentId53Response, TVariables = FixParentId53Request>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/StandardCatalog/FixParentId53`,
          data,
          
        });
      };
    