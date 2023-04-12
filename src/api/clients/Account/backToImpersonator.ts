
import client from "../../../utils/axios-client";
import type { BackToImpersonatorRequest, BackToImpersonatorResponse } from "../../models/Account/BackToImpersonator";

      /**
* @link /api/services/app/Account/BackToImpersonator
*/
      export function backToImpersonator <TData = BackToImpersonatorResponse, TVariables = BackToImpersonatorRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Account/BackToImpersonator`,
          data,
          
        });
      };
    