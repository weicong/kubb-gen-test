
import client from "../../../utils/axios-client";
import type { DelegatedImpersonateRequest, DelegatedImpersonateResponse } from "../../models/Account/DelegatedImpersonate";

      /**
* @link /api/services/app/Account/DelegatedImpersonate
*/
      export function delegatedImpersonate <TData = DelegatedImpersonateResponse, TVariables = DelegatedImpersonateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Account/DelegatedImpersonate`,
          data,
          
        });
      };
    