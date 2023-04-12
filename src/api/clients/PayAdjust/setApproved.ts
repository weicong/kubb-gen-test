
import client from "../../../utils/axios-client";
import type { SetApprovedRequest, SetApprovedResponse } from "../../models/PayAdjust/SetApproved";

      /**
* @link /api/services/app/PayAdjust/SetApproved
*/
      export function setApproved <TData = SetApprovedResponse, TVariables = SetApprovedRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/PayAdjust/SetApproved`,
          data,
          
        });
      };
    