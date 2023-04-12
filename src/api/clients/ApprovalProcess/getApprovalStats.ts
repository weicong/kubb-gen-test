
import client from "../../../utils/axios-client";
import type { GetApprovalStatsResponse } from "../../models/ApprovalProcess/GetApprovalStats";

      /**
* @summary 统计数据（非管理员仅统计自己的）
* @link /api/services/app/ApprovalProcess/GetApprovalStats
*/
      export function getApprovalStats <TData = GetApprovalStatsResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/ApprovalProcess/GetApprovalStats`,
          
        });
      };
    