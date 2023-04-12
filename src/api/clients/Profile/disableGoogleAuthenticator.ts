
import client from "../../../utils/axios-client";
import type { DisableGoogleAuthenticatorRequest, DisableGoogleAuthenticatorResponse } from "../../models/Profile/DisableGoogleAuthenticator";

      /**
* @link /api/services/app/Profile/DisableGoogleAuthenticator
*/
      export function disableGoogleAuthenticator <TData = DisableGoogleAuthenticatorResponse, TVariables = DisableGoogleAuthenticatorRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Profile/DisableGoogleAuthenticator`,
          data,
          
        });
      };
    