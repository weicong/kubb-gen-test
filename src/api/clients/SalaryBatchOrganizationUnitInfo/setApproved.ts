
import client from "../../../utils/axios-client";
import type { SetApprovedRequest, SetApprovedResponse } from "../../models/SalaryBatchOrganizationUnitInfo/SetApproved";

      /**
* @summary 审批通过
* @link /api/services/app/SalaryBatchOrganizationUnitInfo/SetApproved
*/
      export function setApproved <TData = SetApprovedResponse, TVariables = SetApprovedRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/SalaryBatchOrganizationUnitInfo/SetApproved`,
          data,
          
        });
      };
    