
import client from "../../../utils/axios-client";
import type { FixWorkflowRequest, FixWorkflowResponse } from "../../models/PayBill/FixWorkflow";

      /**
* @summary 修正审批流
* @link /api/services/app/PayBill/FixWorkflow
*/
      export function fixWorkflow <TData = FixWorkflowResponse, TVariables = FixWorkflowRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/PayBill/FixWorkflow`,
          data,
          
        });
      };
    