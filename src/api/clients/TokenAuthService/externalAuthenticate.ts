
import client from "../../../utils/axios-client";
import type { ExternalAuthenticateRequest, ExternalAuthenticateResponse } from "../../models/TokenAuthModels/ExternalAuthenticate";

      /**
* @link /api/TokenAuth/ExternalAuthenticate
*/
      export function externalAuthenticate <TData = ExternalAuthenticateResponse, TVariables = ExternalAuthenticateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/TokenAuth/ExternalAuthenticate`,
          data,
          
        });
      };
    