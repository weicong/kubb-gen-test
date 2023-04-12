
import client from "../../../utils/axios-client";
import type { DelegatedImpersonatedAuthenticateRequest, DelegatedImpersonatedAuthenticateResponse, DelegatedImpersonatedAuthenticateQueryParams } from "../../models/TokenAuth/DelegatedImpersonatedAuthenticate";

      /**
* @link /api/TokenAuth/DelegatedImpersonatedAuthenticate
*/
      export function delegatedImpersonatedAuthenticate <TData = DelegatedImpersonatedAuthenticateResponse, TVariables = DelegatedImpersonatedAuthenticateRequest>( data: TVariables, params?: DelegatedImpersonatedAuthenticateQueryParams) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/TokenAuth/DelegatedImpersonatedAuthenticate`,
          data,
          params,
        });
      };
    