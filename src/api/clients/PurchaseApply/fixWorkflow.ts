
import client from "../../../utils/axios-client";
import type { FixWorkflowRequest, FixWorkflowResponse } from "../../models/PurchaseApply/FixWorkflow";

      /**
* @summary 修正审批流
* @link /api/services/app/PurchaseApply/FixWorkflow
*/
      export function fixWorkflow <TData = FixWorkflowResponse, TVariables = FixWorkflowRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/PurchaseApply/FixWorkflow`,
          data,
          
        });
      };
    