
import client from "../../../utils/axios-client";
import type { SetInvalidRequest, SetInvalidResponse } from "../../models/PurchasePackageItem/SetInvalid";

      /**
* @summary 作废
* @link /api/services/app/PurchasePackageItem/SetInvalid
*/
      export function setInvalid <TData = SetInvalidResponse, TVariables = SetInvalidRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/PurchasePackageItem/SetInvalid`,
          data,
          
        });
      };
    