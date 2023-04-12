
import client from "../../../utils/axios-client";
import type { DeleteUserRequest, DeleteUserResponse, DeleteUserQueryParams } from "../../models/User/DeleteUser";

      /**
* @link /api/services/app/User/DeleteUser
*/
      export function deleteUser <TData = DeleteUserResponse, TVariables = DeleteUserRequest>( data: TVariables, params?: DeleteUserQueryParams) {
        return client<TData, TVariables>({
          method: "delete",
          url: `/api/services/app/User/DeleteUser`,
          data,
          params,
        });
      };
    