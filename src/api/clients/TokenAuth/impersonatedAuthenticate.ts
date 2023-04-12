
import client from "../../../utils/axios-client";
import type { ImpersonatedAuthenticateRequest, ImpersonatedAuthenticateResponse, ImpersonatedAuthenticateQueryParams } from "../../models/TokenAuth/ImpersonatedAuthenticate";

      /**
* @link /api/TokenAuth/ImpersonatedAuthenticate
*/
      export function impersonatedAuthenticate <TData = ImpersonatedAuthenticateResponse, TVariables = ImpersonatedAuthenticateRequest>( data: TVariables, params?: ImpersonatedAuthenticateQueryParams) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/TokenAuth/ImpersonatedAuthenticate`,
          data,
          params,
        });
      };
    