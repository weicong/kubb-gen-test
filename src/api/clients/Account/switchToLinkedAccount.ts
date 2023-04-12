
import client from "../../../utils/axios-client";
import type { SwitchToLinkedAccountRequest, SwitchToLinkedAccountResponse } from "../../models/Account/SwitchToLinkedAccount";

      /**
* @link /api/services/app/Account/SwitchToLinkedAccount
*/
      export function switchToLinkedAccount <TData = SwitchToLinkedAccountResponse, TVariables = SwitchToLinkedAccountRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Account/SwitchToLinkedAccount`,
          data,
          
        });
      };
    