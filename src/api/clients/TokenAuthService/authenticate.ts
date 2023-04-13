
import client from "../../../utils/axios-client";
import type { AuthenticateRequest, AuthenticateResponse } from "../../models/TokenAuthModels/Authenticate";

      /**
* @link /api/TokenAuth/Authenticate
*/
      export function authenticate <TData = AuthenticateResponse, TVariables = AuthenticateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/TokenAuth/Authenticate`,
          data,
          
        });
      };
    