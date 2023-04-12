
import client from "../../../utils/axios-client";
import type { GetAllApprovalProcessesForEntityResponse, GetAllApprovalProcessesForEntityQueryParams } from "../../models/ApprovalProcess/GetAllApprovalProcessesForEntity";

      /**
* @summary 获取单个实体的审批记录
* @link /api/services/app/ApprovalProcess/GetAllApprovalProcessesForEntity
*/
      export function getAllApprovalProcessesForEntity <TData = GetAllApprovalProcessesForEntityResponse>( params?: GetAllApprovalProcessesForEntityQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/ApprovalProcess/GetAllApprovalProcessesForEntity`,
          params,
        });
      };
    