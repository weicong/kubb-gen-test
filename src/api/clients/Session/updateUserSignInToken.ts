
import client from "../../../utils/axios-client";
import type { UpdateUserSignInTokenRequest, UpdateUserSignInTokenResponse } from "../../models/Session/UpdateUserSignInToken";

      /**
* @link /api/services/app/Session/UpdateUserSignInToken
*/
      export function updateUserSignInToken <TData = UpdateUserSignInTokenResponse, TVariables = UpdateUserSignInTokenRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/Session/UpdateUserSignInToken`,
          data,
          
        });
      };
    