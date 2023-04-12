
import client from "../../../utils/axios-client";
import type { CreateApprovalProcessRequest, CreateApprovalProcessResponse } from "../../models/ApprovalProcessEndpoint/CreateApprovalProcess";

      /**
* @link /api/ApprovalProcessEndpoint/CreateApprovalProcess
*/
      export function createApprovalProcess <TData = CreateApprovalProcessResponse, TVariables = CreateApprovalProcessRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/ApprovalProcessEndpoint/CreateApprovalProcess`,
          data,
          
        });
      };
    