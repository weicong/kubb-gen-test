
import client from "../../../utils/axios-client";
import type { DelegateNewUserRequest, DelegateNewUserResponse } from "../../models/UserDelegation/DelegateNewUser";

      /**
* @link /api/services/app/UserDelegation/DelegateNewUser
*/
      export function delegateNewUser <TData = DelegateNewUserResponse, TVariables = DelegateNewUserRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/UserDelegation/DelegateNewUser`,
          data,
          
        });
      };
    