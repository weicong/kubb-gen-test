
import client from "../../../utils/axios-client";
import type { SetApprovedRequest, SetApprovedResponse } from "../../models/Budget/SetApproved";

      /**
* @link /api/services/app/Budget/SetApproved
*/
      export function setApproved <TData = SetApprovedResponse, TVariables = SetApprovedRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Budget/SetApproved`,
          data,
          
        });
      };
    