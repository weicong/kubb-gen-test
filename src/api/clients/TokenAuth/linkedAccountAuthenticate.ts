
import client from "../../../utils/axios-client";
import type { LinkedAccountAuthenticateRequest, LinkedAccountAuthenticateResponse, LinkedAccountAuthenticateQueryParams } from "../../models/TokenAuth/LinkedAccountAuthenticate";

      /**
* @link /api/TokenAuth/LinkedAccountAuthenticate
*/
      export function linkedAccountAuthenticate <TData = LinkedAccountAuthenticateResponse, TVariables = LinkedAccountAuthenticateRequest>( data: TVariables, params?: LinkedAccountAuthenticateQueryParams) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/TokenAuth/LinkedAccountAuthenticate`,
          data,
          params,
        });
      };
    