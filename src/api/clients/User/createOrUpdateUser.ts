
import client from "../../../utils/axios-client";
import type { CreateOrUpdateUserRequest, CreateOrUpdateUserResponse } from "../../models/User/CreateOrUpdateUser";

      /**
* @link /api/services/app/User/CreateOrUpdateUser
*/
      export function createOrUpdateUser <TData = CreateOrUpdateUserResponse, TVariables = CreateOrUpdateUserRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/User/CreateOrUpdateUser`,
          data,
          
        });
      };
    