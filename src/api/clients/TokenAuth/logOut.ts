
import client from "../../../utils/axios-client";
import type { LogOutResponse } from "../../models/TokenAuth/LogOut";

      /**
* @link /api/TokenAuth/LogOut
*/
      export function logOut <TData = LogOutResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/TokenAuth/LogOut`,
          
        });
      };
    