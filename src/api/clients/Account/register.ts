
import client from "../../../utils/axios-client";
import type { RegisterRequest, RegisterResponse } from "../../models/Account/Register";

      /**
* @link /api/services/app/Account/Register
*/
      export function register <TData = RegisterResponse, TVariables = RegisterRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Account/Register`,
          data,
          
        });
      };
    