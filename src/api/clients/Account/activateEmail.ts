
import client from "../../../utils/axios-client";
import type { ActivateEmailRequest, ActivateEmailResponse } from "../../models/Account/ActivateEmail";

      /**
* @link /api/services/app/Account/ActivateEmail
*/
      export function activateEmail <TData = ActivateEmailResponse, TVariables = ActivateEmailRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Account/ActivateEmail`,
          data,
          
        });
      };
    