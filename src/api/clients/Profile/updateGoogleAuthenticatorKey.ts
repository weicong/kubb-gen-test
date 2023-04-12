
import client from "../../../utils/axios-client";
import type { UpdateGoogleAuthenticatorKeyRequest, UpdateGoogleAuthenticatorKeyResponse } from "../../models/Profile/UpdateGoogleAuthenticatorKey";

      /**
* @link /api/services/app/Profile/UpdateGoogleAuthenticatorKey
*/
      export function updateGoogleAuthenticatorKey <TData = UpdateGoogleAuthenticatorKeyResponse, TVariables = UpdateGoogleAuthenticatorKeyRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/Profile/UpdateGoogleAuthenticatorKey`,
          data,
          
        });
      };
    