
import client from "../../../utils/axios-client";
import type { UpdateRequest, UpdateResponse } from "../../models/PurchasePackageItem/Update";

      /**
* @link /api/services/app/PurchasePackageItem/Update
*/
      export function update <TData = UpdateResponse, TVariables = UpdateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/PurchasePackageItem/Update`,
          data,
          
        });
      };
    