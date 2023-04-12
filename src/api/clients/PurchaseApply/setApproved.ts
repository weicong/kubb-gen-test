
import client from "../../../utils/axios-client";
import type { SetApprovedRequest, SetApprovedResponse } from "../../models/PurchaseApply/SetApproved";

      /**
* @summary 审批通过
* @link /api/services/app/PurchaseApply/SetApproved
*/
      export function setApproved <TData = SetApprovedResponse, TVariables = SetApprovedRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/PurchaseApply/SetApproved`,
          data,
          
        });
      };
    