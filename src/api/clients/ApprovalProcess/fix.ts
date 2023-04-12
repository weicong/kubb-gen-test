
import client from "../../../utils/axios-client";
import type { FixRequest, FixResponse } from "../../models/ApprovalProcess/Fix";

      /**
* @summary 删除无效的审批记录
* @link /api/services/app/ApprovalProcess/Fix
*/
      export function fix <TData = FixResponse, TVariables = FixRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/ApprovalProcess/Fix`,
          data,
          
        });
      };
    