
import client from "../../../utils/axios-client";
import type { ImpersonateRequest, ImpersonateResponse } from "../../models/Account/Impersonate";

      /**
* @link /api/services/app/Account/Impersonate
*/
      export function impersonate <TData = ImpersonateResponse, TVariables = ImpersonateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Account/Impersonate`,
          data,
          
        });
      };
    